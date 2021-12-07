import axios from 'axios';
axios.defaults.withCredentials = true;

export const kakaoLogin = () => {
  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&state=kakao`;
};

export const kakaoCallback = async (url) => {
  if (url.search) {
    const authorizationCode = url.search.split('=')[1].split('&')[0];
    await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/oauth/kakao`, { authorizationCode });
    window.location.replace('/');
  }
};
