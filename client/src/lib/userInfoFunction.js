import axios from 'axios';
axios.defaults['withCredentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const signInRequest = async (userInfo) => {
  // const { email, password } = userInfo;
  // if (!email || !password) return '아이디와 비밀번호를 입력하세요';
  // try {
  //   const result = await axios.post(
  //     `${process.env.REACT_APP_SERVER_ADDR}/user/signin`, //
  //     { email, password }
  //   );
  //   console.log(result);
  //   return true;
  // } catch (error) {
  //   console.log(error);
  //   return false;
  // }
  console.log('dummy! 👽');
  return true;
};

export const signUpRequest = async (userInfo) => {
  // const { email, password, nickName } = userInfo;
  // if (!email || !password || !nickName) return '아이디와 비밀번호와 닉네임을 입력하세요';
  // try {
  //   const result = await axios.post(
  //     `${process.env.REACT_APP_SERVER_ADDR}/user/signin`, //
  //     { email, password, nickName }
  //   );
  //   console.log(result);
  //   return true;
  // } catch (error) {
  //   console.log(error);
  //   return false;
  // }
  console.log('dummy! 👽');
  return true;
};

export const signOutRequest = async () => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_ADDR}/user/signout` //
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editUserInfoRequest = async () => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/user/edit` //client
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteUserInfoRequest = async () => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/user/delete` //client
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const timeWait = async () => {
  clearTimeout(timeWait.current);
  timeWait.current = setTimeout(() => {
    // * useEffect 안에서 비동기 실행할 때 함수
    // async function setConflictationMsgFromAsync() {
    //   setConflicationMsg(await isConflict(values));
    // }
    // setConflictationMsgFromAsync();
    // setValidationMsg(isValid(values));
  }, 1000);
};
