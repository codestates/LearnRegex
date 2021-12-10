import { checkIsLogin } from './checkIsLogin';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const verifyEmail = async (url) => {
  if (url.search) {
    const token = url.search.split('=')[1].split('&')[0];
    const serverResult = await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/email/verify`, { token });
    checkIsLogin(serverResult);
    window.location.replace('/');
  }
};
export const editEmail = async (url) => {
  if (url.search) {
    const token = url.search.split('=')[1].split('&')[0];
    const serverResult = await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/email/edit`, { token });
    checkIsLogin(serverResult);
    window.location.replace('/');
  }
};
