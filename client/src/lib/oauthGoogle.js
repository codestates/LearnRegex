import axios from 'axios';
axios.defaults.withCredentials = true;

export const googleLogin = () => {
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`;
};

export const googleCallback = async (url) => {
  if (url.search) {
    const authorizationCode = url.search.split('=')[1].split('&')[0];
    await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/oauth/google`, { authorizationCode });
    // window.location.replace('/');
  }
};
