import axios from 'axios';
axios.defaults.withCredentials = true;

const isConflict = async (values, myinfo) => {
  const conflictMsg = {};

  // !----------------------------------------------------------------!
  if (!!values.email && myinfo.email === values.email) {
  } else if (!!values.email) {
    await axios
      .post(`${process.env.REACT_APP_SERVER_ADDR}/user/isValid`, { email: values.email })
      .then((res) => {
        conflictMsg.email = '';
      })
      .catch((err) => {
        // TODO: 서버에서 리팩토링 된 메세지 보고 중복안내메세지 띄우기
        conflictMsg.email = '사용중인 이메일입니다.';
      });
  }

  // !----------------------------------------------------------------!
  if (!!values.nickname && myinfo.nickname === values.nickname) {
  } else if (!!values.nickname) {
    await axios
      .post(`${process.env.REACT_APP_SERVER_ADDR}/user/isValid`, { nickname: values.nickname })
      .then((res) => {
        conflictMsg.nickname = '';
      })
      .catch((err) => {
        // TODO: 서버에서 리팩토링 된 메세지 보고 중복안내메세지 띄우기
        conflictMsg.nickname = '사용중인 닉네임입니다.';
      });
  }
  return conflictMsg;
};

export default isConflict;
