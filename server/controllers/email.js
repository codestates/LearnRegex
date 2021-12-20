const { users } = require('../models');
const { getToken, isVerify, sendToken } = require('./tokenfunction');
const bcrypt = require('bcryptjs');

module.exports = {
  // 이메일 인증
  verifyEmail: async (req, res) => {
    try {
      const onceToken = req.body.token;

      if (!onceToken) {
        return res.status(400).send({ message: 'empty token' });
      }
      // 임시토큰을 검증한 뒤 해당하는 유저 정보 조회
      const verifyToken = isVerify(onceToken);

      if (!verifyToken) {
        return res.status(406).send({ message: 'invalid token' });
      }

      const userInfo = await users.findOne({
        where: { id: verifyToken.id },
        attributes: ['id', 'email', 'nickname', 'socialType', 'verifyEmail'],
        raw: true,
      });

      // 이미 인증을 한 경우
      if (userInfo.verifyEmail) {
        return res.header({ isLogin: false }).status(200).send({ message: 'already verified' });
      }

      // 유저의 이메일을 인증해주고 제대로 된 토큰 발급 하여 응답
      await users.update({ verifyEmail: true }, { where: { id: userInfo.id } });

      const token = getToken(userInfo);

      sendToken(res, token, userInfo.nickname);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 이메일 변경
  editEmail: async (req, res) => {
    try {
      const onceToken = req.body.token;

      if (!onceToken) {
        return res.status(400).send({ message: 'empty token' });
      }
      // 임시토큰을 검증한 뒤 해당하는 유저 정보 조회
      const verifyToken = isVerify(onceToken);

      if (!verifyToken) {
        return res.status(406).send({ message: 'invalid token' });
      }

      const userInfo = await users.findOne({
        where: { id: verifyToken.id },
        attributes: ['id', 'email', 'nickname', 'socialType', 'verifyEmail'],
        raw: true,
      });

      // 이미 이메일을 수정한 경우
      if (userInfo.email === verifyToken.email) {
        return res.header({ isLogin: false }).status(200).send({ message: 'already edit email' });
      }

      // 유저의 이메일을 수정해주고 수정한 이메일로 제대로 된 토큰 발급 하여 응답
      await users.update({ email: verifyToken.email }, { where: { id: userInfo.id } });
      userInfo.email = verifyToken.email;

      const token = getToken(userInfo);

      sendToken(res, token, userInfo.nickname);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 비밀번호 재설정
  resetPassword: async (req, res) => {
    try {
      const { newPassword, token } = req.body;

      if (!newPassword) {
        return res.status(400).send({ message: 'empty newpassword' });
      }
      if (!token) {
        return res.status(400).send({ message: 'empty token' });
      }

      const verifyToken = isVerify(token);

      if (!verifyToken) {
        return res.status(406).send({ message: 'invalid token' });
      }

      // 패스워드 해싱하여 저장
      const salt = bcrypt.genSaltSync(parseInt(Math.random() * 10));
      const hashPassword = bcrypt.hashSync(newPassword, salt);

      await users.update({ password: hashPassword }, { where: { id: verifyToken.id } });

      res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};
