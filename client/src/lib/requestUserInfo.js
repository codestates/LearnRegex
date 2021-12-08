import { checkIsLogin } from '../lib/checkIsLogin';
import axios from 'axios';
axios.defaults['withCredentials'] = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const requestSignIn = async (userInfo) => {
  // const dispatch = useDispatch();
  const { email, password } = userInfo;
  if (!email || !password) return '아이디와 비밀번호를 입력하세요';
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/user/signin`, //
      { email, password }
    );
    console.log(result);
    checkIsLogin(result);
    return true;
  } catch (error) {
    checkIsLogin(error);
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
    checkIsLogin(result);
    return true;
  } catch (error) {
    checkIsLogin(error);
    return false;
  }
};

export const requestEditUserPassword = async (userInfo) => {
  const { oldPassword, newPassword } = userInfo;
  try {
    const result = await axios.patch(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo/password`, //client
      { oldPassword, newPassword }
    );
    console.log(result);
    checkIsLogin(result);
    return true;
  } catch (error) {
    checkIsLogin(error);
    return false;
  }
};

export const requestDeleteUserInfo = async () => {
  // const { oldPassword, newPassword } = userInfo;
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo` //client
      // { oldPassword, newPassword }
    );
    console.log(result);
    checkIsLogin(result);
    return true;
  } catch (error) {
    checkIsLogin(error);
    return false;
  }
};

export const requestSignOut = async () => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/user/signout` //
    );
    console.log(result);
    checkIsLogin(result);
    return true;
  } catch (error) {
    checkIsLogin(error);
    return false;
  }
};

export const requestGetMyInfo = async () => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo` //
    );
    checkIsLogin(result);
    return result;
  } catch (error) {
    checkIsLogin(error);
    return false;
  }
};

export const requestSetNewPassword = async (userInfo) => {
  const { newPassword } = userInfo;
  const url = new URL(window.location.href);
  const urlParserReg = /(?<=state=)([a-z]+)/;

  try {
    if (urlParserReg.test(url.search)) {
      const state = urlParserReg.exec(url.search)[0];

      if (state === 'findpassword') {
        const token = url.search.split('=')[1].split('&')[0];

        const result = await axios.post(
          `${process.env.REACT_APP_SERVER_ADDR}/email/resetpassword`,
          { newPassword, token } //
        );
        console.log(result);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.log(error.response.data.message);
    return false;
  }
};

export const requestFindPassword = async (userInfo) => {
  const { email } = userInfo;
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_SERVER_ADDR}/myinfo`,
      { email } //
    );
    console.log(result);
    return true;
  } catch (error) {
    console.log(error.response.data.message);
    return false;
  }
};
