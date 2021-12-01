const { users } = require('../models');
const { validation, confliction } = require('./inspectfunction');
const { getToken } = require('./tokenfunction');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  // 로그인
  signin: async (req, res) => {
    const { email, password } = req.body;

    // 이메일을 입력하지 않은 경우
    if (!email) {
      return res.status(400).send({ message: 'empty email' });
    }

    // 비밀번호를 입력하지 않은 경우
    if (!password) {
      return res.status(400).send({ message: 'empty password' });
    }

    const userInfo = await users.findOne({ where: { email }, raw: true });

    try {
      // 이메일과 일치하는 유저가 없는 경우
      if (!userInfo) {
        return res.status(406).send({ message: 'invalid email' });
      }

      // 입력한 비밀번호가 맞지 않는 경우
      if (!bcrypt.compareSync(password, userInfo.password)) {
        return res.status(406).send({ message: ' invalid password' });
      }

      const { id, email, nickname } = userInfo;
      const tokenData = { id, email, nickname };

      const token = getToken(tokenData);

      return res
        .cookie('token', token, {
          sameSite: 'None',
          secure: true,
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })
        .status(200)
        .send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 로그아웃
  signout: async (req, res) => {
    try {
      res.clearCookie('token').status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 회원가입
  signup: async (req, res) => {
    try {
      const { email, nickname, password } = req.body;

      // 하나라도 빠져있는 경우
      if (!(email && nickname && password)) {
        return res.status(400).send({ message: 'empty information' });
      }

      // 서버 자체적 검증(유효성)
      const isValid = validation(req.body);
      const { isValidEmail, isValidNickname, isValidPassword } = isValid;

      // 서버 자체적 검증(중복)
      const isConflict = await confliction(req.body);
      const { isConflictEmail, isConflictNickname } = isConflict;

      // 유효성, 중복 검사 중 하나라도 검증이 안된 경우
      if (!(isValidEmail && isValidNickname && isValidPassword) || !(isConflictEmail && isConflictNickname)) {
        return res.status(406).send({ data: { isValid, isConflict } });
      }

      // 데이터베이스에 저장하기 전 비밀번호 암호화
      const salt = bcrypt.genSaltSync(Number(process.env.HASH_NUMBER));
      const hashPassword = bcrypt.hashSync(password, salt);

      await users.create({ email, nickname, password: hashPassword });
      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 중복검사
  validinfo: async (req, res) => {
    const key = Object.keys(req.body)[0];

    try {
      // 아무 요청이 없는 경우
      if (!key) {
        return res.status(400).send({ message: 'empty request' });
      }

      const isValid = await users.findOne({ where: { [key]: req.body[key] } });

      // 이미 존재하는 경우
      if (isValid) {
        return res.status(409).send({ message: 'conflict information' });
      }

      return res.status(200).send({ message: 'success' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};