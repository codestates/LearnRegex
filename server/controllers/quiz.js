const { users, quiz, users_quiz } = require('../models');
const { isAuth } = require('./authfunction');

module.exports = {
  getquizs: async (req, res) => {
    try {
      // 퀴즈 리스트 조회
      let quizList = await quiz.findAll({
        attributes: ['id', 'title', 'count', 'isClear'],
        include: [{ model: users, attributes: ['nickname'] }],
      });

      // 응답을 보내기 위한 코드 작업
      quizList = quizList.map((el) => {
        el = el.get({ plain: true });
        el.nickname = el.user.nickname;
        delete el.user;
        return el;
      });

      // 토큰이 담겨있지 않은 경우
      if (!req.cookies.token) {
        return res.header({ isLogin: false }).status(200).send({ quizs: quizList });
      }

      // 유저 확인
      await isAuth(req, res, () => {});

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

      return res.status(200).send({ quizs: quizList });
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
        attributes: ['id', 'userId', 'title', 'testCase', 'testCaseTarget', 'answer', 'explanation', 'count', 'isMade'],
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

      // 본인이 만든 퀴즈인 경우
      if (quizInfo.userId === req.userId) {
        quizInfo.isMade = true;
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
      const { title, testCase, testCaseTarget, answer, explanation } = req.body;
      const userId = req.userId;

      // 추가해야 하는 정보가 하나라도 빠졌을 경우
      if (!(title && testCase && testCaseTarget && answer && explanation)) {
        return res.status(400).send({ message: 'empty information' });
      }

      await quiz.create({ userId, title, testCase, testCaseTarget, answer, explanation, count: 0, isClear: false, isMade: false });

      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  editquiz: async (req, res) => {
    try {
      const { title, testCase, testCaseTarget, answer, explanation } = req.body;

      // 추가해야 하는 정보가 하나라도 빠졌을 경우
      if (!(title && testCase && testCaseTarget && answer && explanation)) {
        return res.status(400).send({ message: 'empty information' });
      }

      await quiz.update({ title, testCase, testCaseTarget, answer, explanation }, { where: { id: req.query.quizId } });

      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  clearquiz: async (req, res) => {
    //! 비로그인 유저라면 그냥 무시!
    res.send('clear quiz');
  },

  deletequiz: async (req, res) => {
    res.send('delete quiz');
  },
};
