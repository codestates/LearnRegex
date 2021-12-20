const { users } = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  validation: ({ email, nickname, password }) => {
    const result = {};
    const getByte = (str) => {
      let byte = 0;
      for (let i = 0; i < str.length; ++i) str.charCodeAt(i) > 127 ? (byte += 2) : byte++;
      return byte;
    };

    if (email) {
      if (!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g.test(email)) {
        result.isValidEmail = false;
      }
    }

    if (nickname) {
      const strByte = getByte(nickname);
      if (!/^[가-힣a-zA-Z0-9]{2,12}$/g.test(nickname) || !(strByte < 13 && strByte > 3)) {
        result.isValidNickname = false;
      }
    }

    if (password) {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,32}$/g.test(password)) {
        result.isValidPassword = false;
      }
    }
    return result;
  },
  confliction: async ({ userId, email, nickname }) => {
    // 들어온게 있다면 실행하도록
    const result = {};

    const emailQuery = { email };
    if (userId) emailQuery[Op.not] = { id: userId };

    const nicknameQuery = { nickname };
    if (userId) nicknameQuery[Op.not] = { id: userId };

    let isConflict;

    if (email) {
      isConflict = await users.findOne({
        where: emailQuery,
      });
      if (isConflict) {
        result.isConflictEmail = false;
      }
    }

    if (nickname) {
      isConflict = await users.findOne({
        where: nicknameQuery,
      });
      if (isConflict) {
        result.isConflictNickname = false;
      }
    }
    return result;
  },
};
