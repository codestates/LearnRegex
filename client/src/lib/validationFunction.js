import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const isValidSignUp = async (values) => {
  const validResult = {
    email: await isValidEmail(values.email),
    nickname: await isValidNickname(values.nickname),
    password: isValidPassword(values.password),
    confirm: isValidPasswordConfirm(values.password, values.confirm),
  };
  return validResult;
};

export const isValidEditUserInfo = async (values) => {
  const validResult = {
    email: await isValidOnlyEmail(values.email),
    nickname: await isValidOnlyNickname(values.nickname),
  };
  return validResult;
};

export const isValidEditUserPassword = async (values) => {
  const validResult = {
    oldPassword: isValidPassword(values.oldPassword),
    newPassword: isValidPassword(values.newPassword),
    confirm: isValidPasswordConfirm(values.newPassword, values.confirm),
  };
  return validResult;
};

export const isValidSetNewPassword = async (values) => {
  const validResult = {
    newPassword: isValidPassword(values.newPassword),
    confirm: isValidPasswordConfirm(values.newPassword, values.confirm),
  };
  return validResult;
};

// !----------------------------------------------------------------!

export const isValidEmail = async (email) => {
  if (!email) {
    return '이메일을 입력해주세요.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return '올바른 이메일 형식이 아닙니다.';
  } else if (!(await isUniqueEmail(email))) {
    return '중복된 이메일입니다.';
  } else {
    return '';
  }
};

export const isValidOnlyEmail = async (email) => {
  if (!email) {
    return '이메일을 입력해주세요.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return '올바른 이메일 형식이 아닙니다.';
  } else {
    return '';
  }
};

export const isValidNickname = async (nickname) => {
  if (!nickname) {
    return '닉네임을 입력해주세요.';
  } else if (!/^[가-힣a-zA-Z0-9]{2,10}$/g.test(nickname)) {
    return '올바른 닉네임이 아닙니다.';
  } else if (!(await isUniqueNickname(nickname))) {
    return '중복된 닉네임입니다.';
  } else {
    return '';
  }
};

export const isValidOnlyNickname = async (nickname) => {
  if (!nickname) {
    return '닉네임을 입력해주세요.';
  } else if (!/^[가-힣a-zA-Z0-9]{2,10}$/g.test(nickname)) {
    return '올바른 닉네임이 아닙니다.';
  } else {
    return '';
  }
};

export const isValidPassword = (password) => {
  if (!password) {
    return '비밀번호를 입력해주세요.';
  } else if (password.length < 8) {
    return '비밀번호는 8자 이상이어야 합니다.';
  } else {
    return '';
  }
};

export const isValidPasswordConfirm = (password, confirm) => {
  if (!confirm) {
    return '';
  } else if (confirm !== password) {
    return '비밀번호가 다릅니다.';
  } else {
    return '';
  }
};

// !----------------------------------------------------------------!
const isUniqueEmail = async (email) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_ADDR}/user/validinfo`, { email: email })
    .then((res) => {
      return false;
    })
    .catch((err) => {
      return true;
    });
};

// !----------------------------------------------------------------!
const isUniqueNickname = async (nickname) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_ADDR}/user/validinfo`, { nickname: nickname })
    .then((res) => {
      return false;
    })
    .catch((err) => {
      return true;
    });
};
