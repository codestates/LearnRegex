const { users, quiz } = require('../models');
const db = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { validation, confliction } = require('./inspectfunction');
const bcrypt = require('bcryptjs');

module.exports = {
  // 유저 정보 조회
  getmyinfo: async (req, res) => {
    // 유저 이메일, 닉네임 조회
    const userInfo = await users.findOne({ where: { id: req.userId }, attributes: ['email', 'nickname'], raw: true });

    // 유저가 만든 퀴즈 갯수 조회
    const makeQuiz = (await quiz.findAndCountAll({ where: { userId: req.userId } })).count;

    // 유저가 클리어한 퀴즈 갯수 조회
    const clearQuiz = (await db.sequelize.models.users_quiz.findAndCountAll({ where: { userId: req.userId } })).count;

    // 조회 정보 합쳐서 응답
    const data = { ...userInfo, makeQuiz, clearQuiz };
    return res.status(200).send({ data });
  },

  // 유저 이메일, 닉네임 수정
  editmyinfo: async (req, res) => {
    const { email, nickname } = req.body;

    // 들어온 요청이 없으면
    if (!(email && nickname)) {
      return res.status(400).send({ message: 'empty information' });
    }
    // 유저 정보 조회
    const userInfo = await users.findAll({ where: { [Op.not]: { id: req.userId }, [Op.or]: [{ email }, { nickname }] }, raw: true });
    console.log(userInfo);
    res.send('edit myinfo');
  },

  // 유저 패스워드 수정
  editpassword: async (req, res) => {
    res.send('edit password');
  },

  // 회원 탈퇴
  deletemyinfo: async (req, res) => {
    res.send('delete myinfo');
  },
};
