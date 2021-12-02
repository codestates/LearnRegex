const { users, quiz } = require('../models');
const db = require('../models');
const { validation, confliction } = require('./inspectfunction');
const bcrypt = require('bcryptjs');

module.exports = {
  // 유저 정보 조회
  getmyinfo: async (req, res) => {
    try {
      // 유저 이메일, 닉네임 조회
      const userInfo = await users.findOne({ where: { id: req.userId }, attributes: ['email', 'nickname'], raw: true });

      // 유저가 만든 퀴즈 갯수 조회
      const makeQuiz = (await quiz.findAndCountAll({ where: { userId: req.userId } })).count;

      // 유저가 클리어한 퀴즈 갯수 조회
      const clearQuiz = (await db.sequelize.models.users_quiz.findAndCountAll({ where: { userId: req.userId } })).count;

      // 조회 정보 합쳐서 응답
      const data = { ...userInfo, makeQuiz, clearQuiz };
      return res.status(200).send({ data });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 유저 이메일, 닉네임 수정
  editmyinfo: async (req, res) => {
    try {
      const { email, nickname } = req.body;
      const id = req.userId;
      const data = { id, email, nickname };

      // 들어온 요청이 없는 경우
      if (!(email && nickname)) {
        return res.status(400).send({ message: 'empty information' });
      }
      // 수정 내용 유효성 검사
      const isValid = validation(req.body);

      // 수정 내용 중복 검사
      const isConflict = await confliction(data);

      // 유효성, 중복 검사 중 하나라도 검증이 안된 경우
      if (Object.keys(isValid).length || Object.keys(isConflict).length) {
        return res.status(406).send({ data: { isValid, isConflict } });
      }

      // 수정 내용 적용
      await users.update({ email, nickname }, { where: { id } });
      res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 유저 패스워드 수정
  editpassword: async (req, res) => {
    try {
      const { oldPassword, newPassword } = req.body;

      // 현재 비밀번호를 입력하지 않은 경우
      if (!oldPassword) {
        return res.status(400).send({ message: 'empty oldpassword' });
      }

      // 변경할 비밀번호를 입력하지 않은 경우
      if (!newPassword) {
        return res.status(400).send({ message: 'empty newpassword' });
      }

      // 변경할 유저 정보 조회
      const userInfo = await users.findOne({ where: { id: req.userId }, raw: true });

      // oldPassword와 현재 비밀번호가 일치하지 않은 경우
      if (!bcrypt.compareSync(oldPassword, userInfo.password)) {
        return res.status(406).send({ message: 'invalid oldPassword' });
      }

      // newPassword 유효성 검사
      const password = newPassword;
      const isValid = validation({ password });

      if (Object.keys(isValid).length) {
        return res.status(406).send({ data: { isValid } });
      }

      // 변경할 비밀번호 해싱하여 저장
      const salt = bcrypt.genSaltSync(parseInt(Math.random() * 10));
      const hashPassword = bcrypt.hashSync(password, salt);

      await users.update({ password: hashPassword }, { where: { id: req.userId } });
      res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 회원 탈퇴
  deletemyinfo: async (req, res) => {
    try {
      // 유저 정보 삭제
      await users
        .header({ isLogin: false })
        .clearCookie('token')
        .destroy({ where: { id: req.userId } });
      res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};
