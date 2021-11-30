import axios from 'axios';
axios.defaults['withCredentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const signIn = async (userInfo) => {
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
};

export const signUp = async (userInfo) => {
  const { email, password, nickName } = userInfo;
  if (!email || !password || !nickName) return '아이디와 비밀번호와 닉네임을 입력하세요';
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/user/signin`, //
      { email, password, nickName }
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const SignOut = async () => {
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

export const editUserInfo = async () => {
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

export const deleteUserInfo = async () => {
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
