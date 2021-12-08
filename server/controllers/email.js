const { users } = require('../models');
const { getToken, isVerify, sendToken } = require('./tokenfunction');

module.exports = {
  verifyEmail: async (req, res) => {
    try {
      const onceToken = req.body.token;

      // 임시토큰을 검증한 뒤 해당하는 유저 정보 조회
      const verifyToken = isVerify(onceToken);

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

      sendToken(res, token);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: 'server error' });
    }
  },
};
