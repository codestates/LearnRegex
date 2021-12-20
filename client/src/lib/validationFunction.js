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

export const isValidEditUserInfo = async (values, myInfo) => {
  const validResult = {
    email: await isValidEmail(values.email, myInfo.email),
    nickname: await isValidNickname(values.nickname, myInfo.nickname),
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
export const getByte = (str) => {
  let byte = 0;
  for (let i = 0; i < str.length; ++i) str.charCodeAt(i) > 127 ? (byte += 2) : byte++;
  return byte;
};

export const isValidEmail = async (email, myInfoEmail) => {
  if (!email) {
    return '이메일을 입력해주세요.';
  } else if (!!myInfoEmail && email === myInfoEmail) {
    return '';
  } else if (!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g.test(email)) {
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
  } else if (!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/g.test(email)) {
    return '올바른 이메일 형식이 아닙니다.';
  } else {
    return '';
  }
};

export const isValidNickname = async (nickname, myInfoNickname) => {
  const strByte = getByte(nickname);
  if (!nickname) {
    return '닉네임을 입력해주세요.';
  } else if (!!myInfoNickname && nickname === myInfoNickname) {
    return '';
  } else if (!/^[가-힣a-zA-Z0-9]*$/g.test(nickname)) {
    return '올바른 닉네임이 아닙니다.';
  } else if (!(strByte < 13 && strByte > 3)) {
    return '한글 2~6자, 영어 4~12자로 입력하세요.';
  } else if (!(await isUniqueNickname(nickname))) {
    return '중복된 닉네임입니다.';
  } else {
    return '';
  }
};

// export const isValidOnlyNickname = async (nickname) => {
//   const strByte = getByte(nickname);
//   if (!nickname) {
//     return '닉네임을 입력해주세요.';
//   } else if (!(strByte < 13 && strByte > 3)) {
//     return '한글 2~6자, 영어 4~12자로 입력하세요.';
//   } else if (!/^[가-힣a-zA-Z0-9]{2,12}$/g.test(nickname)) {
//     return '올바른 닉네임이 아닙니다.';
//   } else {
//     return '';
//   }
// };

export const isValidPassword = (password) => {
  if (!password) {
    return '비밀번호를 입력해주세요.';
  } else if (!(password.length < 33 && password.length > 7)) {
    return '비밀번호 8~32자로 입력하세요.';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,32}$/g.test(password)) {
    return '최소 1개 이상 숫자와 영어를 입력하세요.';
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
      return true;
    })
    .catch((err) => {
      return false;
    });
};

// !----------------------------------------------------------------!
const isUniqueNickname = async (nickname) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_ADDR}/user/validinfo`, { nickname: nickname })
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};
