const { sign, verify } = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  //todo: Token 생성 함수 만들기
  getToken: (data) => sign(data, process.env.ACCESS_SECRET, { expiresIn: '1d' }),

  //todo: token 유효성 검사 함수 만들기
  isVerify: (token) => {
    return verify(token, process.env.ACCESS_SECRET, (err, result) => {
      if (err) return null;
      else return result;
    });
  },

  sendToken: (res, token) => {
    const cookieOption = {
      sameSite: 'Strict',
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    };
    if (process.env.DOMAIN_NAME) cookieOption.domain = process.env.DOMAIN_NAME;

    return res.header({ isLogin: true }).cookie('token', token, cookieOption).status(200).send({ message: 'success' });
  },
};
