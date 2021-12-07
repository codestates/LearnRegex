const { users } = require('../models');
const { getToken, sendToken } = require('./tokenfunction');
const axios = require('axios');

module.exports = {
  oauthGoogle: async (req, res) => {
    try {
      const code = req.body.authorizationCode;

      const result = await axios.post(
        // authorization code를 이용해서 access token 요청
        `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.REDIRECT_URI}&grant_type=authorization_code`,
        {},
        {
          headers: { accept: 'application/json' },
        }
      );

      const googleUserInfo = await axios.get(
        // access token으로 유저정보 요청
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${result.data.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${result.data.access_token}`,
          },
        }
      );

      const userInfo = await users.findOrCreate({
        where: {
          email: googleUserInfo.data.email,
          socialType: 'google',
        },
        defaults: {
          email: googleUserInfo.data.email,
          nickname: googleUserInfo.data.name,
          password: '',
          socialType: 'google',
          verifyEmail: true,
        },
        raw: true,
      });

      const { id, email, nickname, socialType, verifyEmail } = userInfo;
      const tokenData = { id, email, nickname, socialType, verifyEmail };

      const token = getToken(tokenData);

      sendToken(res, token);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  oauthKakao: async (req, res) => {
    try {
      const code = req.body.authorizationCode;

      const result = await axios.post(
        // authorization code를 이용해서 access token 요청
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&code=${code}`
      );

      const kakaoUserInfo = await axios.get(
        // access token으로 유저정보 요청
        'https://kapi.kakao.com/v2/user/me',
        {
          headers: {
            Authorization: `Bearer ${result.data.access_token}`,
          },
        }
      );

      const userInfo = await users.findOrCreate({
        where: {
          email: kakaoUserInfo.data.kakao_account.email,
          socialType: 'kakao',
        },
        defaults: {
          email: kakaoUserInfo.data.kakao_account.email,
          nickname: kakaoUserInfo.data.properties.nickname,
          password: '',
          socialType: 'kakao',
          verifyEmail: true,
        },
        raw: true,
      });

      const { id, email, nickname, socialType, verifyEmail } = userInfo;
      const tokenData = { id, email, nickname, socialType, verifyEmail };

      const token = getToken(tokenData);

      sendToken(res, token);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },

  oauthGithub: async (req, res) => {
    try {
      res.send('github');
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};
