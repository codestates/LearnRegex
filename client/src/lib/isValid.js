const isValid = (values, checkList) => {
  let validationMsg = {};

  if (checkList.includes('email')) {
    if (!values.email) {
      validationMsg.email = '이메일을 입력하세요.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      validationMsg.email = '올바른 이메일 형식이 아닙니다.';
    } else validationMsg.email = '';
  }

  if (checkList.includes('nickname')) {
    if (!values.nickname) {
      validationMsg.nickname = '닉네임을 입력하세요.';
    } else if (!/^[가-힣a-zA-Z0-9]{2,10}$/g.test(values.nickname)) {
      validationMsg.nickname = '올바른 닉네임이 아닙니다.';
    } else validationMsg.nickname = '';
  }

  if (checkList.includes('password')) {
    if (!values.password) {
      validationMsg.password = '비밀번호를 입력하세요.';
    } else if (values.password.length < 8) {
      validationMsg.password = '비밀번호는 8자 이상이어야 합니다.';
    } else validationMsg.password = '';

    if (!values.confirm) {
      validationMsg.confirm = '비밀번호를 입력하세요.';
    } else if (values.confirm !== values.password) {
      validationMsg.confirm = '비밀번호가 다릅니다.';
    } else validationMsg.confirm = '';
  }

  return validationMsg;
};

export default isValid;
