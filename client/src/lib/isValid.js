const isValid = (values, location) => {
  let validationMsg = {};

  if (location === 'MyInfo') {
  } else {
    if (!values.username) {
      validationMsg.username = '';
    } else if (!/^[a-z][a-z0-9]{3,15}$/g.test(values.username)) {
      validationMsg.username = '올바른 아이디가 아닙니다.';
    }
  }

  if (!values.email) {
    validationMsg.email = '';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    validationMsg.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!values.nickname) {
    validationMsg.nickname = '';
  } else if (!/^[가-힣a-zA-Z0-9]{2,10}$/g.test(values.nickname)) {
    validationMsg.nickname = '올바른 닉네임이 아닙니다.';
  }

  if (!values.password) {
    validationMsg.password = '';
  } else if (values.password.length < 8) {
    validationMsg.password = '비밀번호는 8자 이상이어야 합니다.';
  }

  if (!values.confirm) {
    validationMsg.confirm = '';
  } else if (values.confirm !== values.password) {
    validationMsg.confirm = '비밀번호가 다릅니다.';
  }

  return validationMsg;
};

export default isValid;
