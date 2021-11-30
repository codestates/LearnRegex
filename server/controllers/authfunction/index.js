const { users } = require('../../models');
const { isVerify } = require('../tokenfunction');

module.exports = {
  isAuth: async (req, res, next) => {
    // 토큰이 담겨있는지 확인
    if (!req.cookies.token) {
      return res.status(401).send({ message: 'not found token' });
    }

    // 담겨있다면 유효한 토큰인지 확인
    const token = req.cookies.token;

    try {
      const verifyToken = isVerify(token);

      if (!verifyToken) {
        return res.status(406).send({ message: 'invalid token' });
      }

      // 유효한 토큰이라면 database에 저장된 유저인지 확인
      const isUser = await users.findOne({ where: { id }, raw: true });

      if (!isUser) {
        return res.status(404).send({ message: 'not found user' });
      }

      // database에 존재하는 유저라면 req.userId에 id를 담아서 다음 라우터로 전달
      req.userId = isUser.id;
      return next();
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};