require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

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
};
