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

      res.status(200).send({ quizs: quizList });
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

      // 퀴즈 카운트 증가
      await quiz.update({ count: quizInfo.count + 1 }, { where: { id: req.query.quizId } });

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

      res.status(200).send({ quiz: quizInfo });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  addquiz: async (req, res) => {
    res.send('add quiz');
  },

  editquiz: async (req, res) => {
    res.send('edit quiz');
  },

  clearquiz: async (req, res) => {
    //! 비로그인 유저라면 그냥 무시!
    res.send('clear quiz');
  },

  deletequiz: async (req, res) => {
    res.send('delete quiz');
  },
};
