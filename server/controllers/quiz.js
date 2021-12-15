const { users, quiz, users_quiz } = require('../models');
const { isAuth } = require('./authfunction');

module.exports = {
  getquizs: async (req, res) => {
    try {
      const { page } = req.query;
      // 퀴즈리스트의 시작지점
      let offset = 0;

      // page가 넘어가면 데이터베이스의 시작지점도 이동
      if (page > 1) {
        offset = 4 * (page - 1);
      }
      // 퀴즈 리스트 조회
      let quizList = await quiz.findAndCountAll({
        attributes: ['id', 'title', 'count', 'isClear'],
        include: [{ model: users, attributes: ['nickname'] }],
        offset,
        limit: 4,
      });

      // 총 페이지 수 계산
      const pages = Math.ceil(quizList.count / 4);

      // 응답을 보내기 위한 코드 작업
      quizList = quizList.rows.map((el) => {
        el = el.get({ plain: true });
        el.nickname = el.user.nickname;
        delete el.user;
        return el;
      });

      // 토큰이 담겨있지 않은 경우
      if (!req.cookies.token) {
        return res.header({ isLogin: false }).status(200).send({ pages, quizs: quizList });
      }

      // 유저 확인
      await isAuth(req, res, () => {});

      // isAuth가 실패한 경우 함수 종료
      if (!req.userId) return;

      // 유저가 푼 퀴즈 아이디 조회
      const clearQuizList = await users_quiz.findAll({
        where: {
          userId: req.userId,
        },
        attributes: ['quizId'],
        raw: true,
      });

      // 퀴즈 목록을 돌며 isClear 상태 변경
      clearQuizList.map((el) => {
        quizList.map((data) => {
          if (data.id === el.quizId) {
            data.isClear = true;
          }
        });
      });

      return res.status(200).send({ pages, quizs: quizList });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  getquiz: async (req, res) => {
    try {
      // 퀴즈 상세 정보 조회
      let quizInfo = await quiz.findOne({
        where: { id: req.query.quizId },
        attributes: ['id', 'userId', 'title', 'testCase', 'answer', 'explanation', 'count', 'isMade', 'isClear'],
        include: [{ model: users, attributes: ['nickname'] }],
      });

      // 응답을 보내기 위한 코드 작업
      quizInfo = quizInfo.get({ plain: true });
      quizInfo.nickname = quizInfo.user.nickname;
      delete quizInfo.user;
      delete quizInfo.count;

      // 토큰이 담겨있지 않은 경우
      if (!req.cookies.token) {
        delete quizInfo.userId;
        return res.header({ isLogin: false }).status(200).send({ quiz: quizInfo });
      }

      // 유저 확인
      await isAuth(req, res, () => {});

      // isAuth가 실패한 경우 함수 종료
      if (!req.userId) return;

      // 본인이 만든 퀴즈인 경우
      if (quizInfo.userId === req.userId) {
        quizInfo.isMade = true;
      }

      // 이미 해결한 문제일 경우
      const isClear = await users_quiz.findOne({ where: { userId: req.userId, quizId: quizInfo.id } });

      if (isClear) {
        quizInfo.isClear = true;
      }

      delete quizInfo.userId;

      return res.status(200).send({ quiz: quizInfo });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  addquiz: async (req, res) => {
    try {
      const { title, testCase, answer, explanation } = req.body;
      const userId = req.userId;

      // 추가해야 하는 정보가 하나라도 빠졌을 경우
      if (!(title && testCase && answer && explanation)) {
        return res.status(400).send({ message: 'empty information' });
      }

      await quiz.create({ userId, title, testCase, answer, explanation, count: 0, isClear: false, isMade: false });

      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  editquiz: async (req, res) => {
    try {
      const { title, testCase, answer, explanation } = req.body;

      // 수정해야 하는 정보가 하나라도 빠졌을 경우
      if (!(title && testCase && answer && explanation)) {
        return res.status(400).send({ message: 'empty information' });
      }

      const quizInfo = await quiz.findOne({ where: { id: req.query.quizId } });

      // 수정해야 할 퀴즈가 db에 존재하는지 확인
      if (!quizInfo) {
        return res.status(404).send({ message: 'not found quiz' });
      }

      await quiz.update({ title, testCase, answer, explanation }, { where: { id: req.query.quizId } });

      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  clearquiz: async (req, res) => {
    try {
      //! 비로그인 유저라면 그냥 무시!
      if (!req.cookies.token) {
        return res.header({ isLogin: false }).status(200).send({ message: 'success' });
      }

      // 유저 확인
      await isAuth(req, res, () => {});

      // isAuth가 실패한 경우 함수 종료
      if (!req.userId) return;

      const userId = req.userId;

      const quizId = req.query.quizId;
      const quizInfo = await quiz.findOne({ where: { id: quizId } });

      // 유저가 해결한 문제가 db에 존재하는지 확인
      if (!quizInfo) {
        return res.status(404).send({ message: 'not found quiz' });
      }

      // 유저가 이미 해결한 문제인 경우
      const isClear = await users_quiz.findOne({ where: { userId, quizId } });

      // 응답만 보내주기
      if (isClear) {
        return res.status(200).send({ message: 'already solve quiz' });
      }

      await users_quiz.create({ userId, quizId });

      return res.status(200).send('success');
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  deletequiz: async (req, res) => {
    try {
      const userId = req.userId;
      const quizId = req.query.quizId;

      const quizInfo = await quiz.findOne({ where: { id: quizId } });

      // 삭제하려는 퀴즈가 db에 존재하는지 확인
      if (!quizInfo) {
        return res.status(404).send({ message: 'not found quiz' });
      }

      // 삭제하려는 퀴즈가 내가 만든 퀴즈가 아닌 경우
      if (userId !== quizInfo.userId) {
        return res.status(406).send({ message: 'not user quiz' });
      }

      await quiz.destroy({ where: { id: quizId } });

      return res.status(200).send('success');
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};
