const { users } = require('../../models');

module.exports = {
  validation: ({ email, nickname, password }) => {
    const result = {
      isValidEmail: true,
      isValidNickname: true,
      isValidPassword: true,
    };

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
    return result;
  },
  confliction: async ({ email, nickname }) => {
    // 들어온게 있다면 실행하도록
    const result = {
      isConflictEmail: true,
      isConflictNickname: true,
    };

    let isConflict;

    if (email) {
      isConflict = await users.findOne({ where: { email } });
      if (isConflict) {
        result.isConflictEmail = false;
      }
    }

    if (nickname) {
      isConflict = await users.findOne({ where: { nickname } });
      if (isConflict) {
        result.isConflictNickname = false;
      }
    }
    return result;
  },
};
