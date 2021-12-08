const { users } = require('../models');
const { validation, confliction } = require('./inspectfunction');
const { getToken, sendToken } = require('./tokenfunction');
const { sendemail } = require('./mailfunction');
const bcrypt = require('bcryptjs');

module.exports = {
  // 로그인
  signin: async (req, res) => {
    const { email, password } = req.body;

    // 이메일을 입력하지 않은 경우
    if (!email) {
      return res.header({ isLogin: false }).status(400).send({ message: 'empty email' });
    }

    // 비밀번호를 입력하지 않은 경우
    if (!password) {
      return res.header({ isLogin: false }).status(400).send({ message: 'empty password' });
    }

    const userInfo = await users.findOne({ where: { email }, raw: true });

    try {
      // 이메일과 일치하는 유저가 없는 경우
      if (!userInfo) {
        return res.header({ isLogin: false }).status(406).send({ message: 'invalid email' });
      }

      // 입력한 비밀번호가 맞지 않는 경우
      if (!bcrypt.compareSync(password, userInfo.password)) {
        return res.header({ isLogin: false }).status(406).send({ message: ' invalid password' });
      }

      // 이메일 인증을 하지 않은 경우
      if (!userInfo.verifyEmail) {
        return res.header({ isLogin: false }).status(401).send({ message: 'not verify email' });
      }

      const { id, email, nickname, socialType, verifyEmail } = userInfo;
      const tokenData = { id, email, nickname, socialType, verifyEmail };

      const token = getToken(tokenData);

      sendToken(res, token);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  // 로그아웃
  signout: async (req, res) => {
    try {
      return res.header({ isLogin: false }).clearCookie('token').status(200).send({ message: 'success' });
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

      // 서버 자체적 검증(중복)
      const isConflict = await confliction(req.body);

      // 유효성, 중복 검사 중 하나라도 검증이 안된 경우
      if (Object.keys(isValid).length || Object.keys(isConflict).length) {
        return res.status(406).send({ data: { isValid, isConflict } });
      }

      // 데이터베이스에 저장하기 전 비밀번호 암호화
      const salt = bcrypt.genSaltSync(parseInt(Math.random() * 10));
      const hashPassword = bcrypt.hashSync(password, salt);

      const userInfo = await users.findOrCreate({
        where: {
          email,
          socialType: 'local',
        },
        defaults: {
          email,
          nickname,
          password: hashPassword,
          socialType: 'local',
          verifyEmail: false,
        },
        raw: true,
      });
      // 유저의 아이디만 담긴 임시 토큰 발급하여 유저 메일로 발송
      const token = getToken({ id: userInfo[0].id });

      const html = `<img width="350" alt="learnregex-logo" src="https://user-images.githubusercontent.com/62797565/143479379-106673e5-05e7-4447-9138-979457152e54.png"/>
                    <h3> 안녕하세요 Learn Regex 인증 메일입니다. </h3>
                    <h3> 아래 버튼을 눌러 이메일 인증을 완료해주세요! </h3>
                    <button style="background-color:white"><a style="text-decoration:none; color:black;" href='http://localhost:3000?token=${token}&state=signup'>Learn Regex 시작하기!</a></button>`;
      sendemail(email, html);
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
