import axios from 'axios';
axios.defaults['withCredentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const requestSignIn = async (userInfo) => {
  const { email, password } = userInfo;
  if (!email || !password) return '아이디와 비밀번호를 입력하세요';
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/user/signin`, //
      { email, password }
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestSignUp = async (userInfo) => {
  const { email, password, nickname } = userInfo;
  if (!email || !password || !nickname) return '아이디와 비밀번호와 닉네임을 입력하세요';
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/user/signup`, //
      { email, password, nickname }
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestEditUserInfo = async (userInfo) => {
  const { email, nickname } = userInfo;
  axios.defaults['withCredentials'] = true;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  try {
    const result = await axios.patch(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo`, //client
      { email, nickname }
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestEditUserPassword = async (userInfo) => {
  const { email, nickname } = userInfo;
  try {
    const result = await axios.patch(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo`, //client
      { email, nickname }
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestDeleteUserInfo = async (userInfo) => {
  const { oldPassword, newPassword } = userInfo;
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo`, //client
      { oldPassword, newPassword }
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestSignOut = async () => {
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

export const requestGetMyInfo = async () => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo` //
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};