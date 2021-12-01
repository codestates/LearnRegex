const { users } = require('../../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  validation: ({ email, nickname, password }) => {
    const result = {};

    if (email) {
      if (!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g.test(email)) {
        result.isValidEmail = false;
      }
    }

    if (nickname) {
      if (!/^[가-힣a-zA-Z0-9]{2,10}$/g.test(nickname)) {
        result.isValidNickname = false;
      }
    }

    if (password) {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,16}$/g.test(password)) {
        result.isValidPassword = false;
      }
    }
    console.log(result);
    return result;
  },
  confliction: async ({ id, email, nickname }) => {
    // 들어온게 있다면 실행하도록
    const result = {};

    const emailQuery = { email };
    if (id) emailQuery[Op.not] = { id };

    const nicknameQuery = { nickname };
    if (id) nicknameQuery[Op.not] = { id };

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
