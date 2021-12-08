import axios from 'axios';
axios.defaults.withCredentials = true;

export const githubLogin = () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&state=github`;
};

export const githubCallback = async (url) => {
  if (url.search) {
    const authorizationCode = url.search.split('=')[1].split('&')[0];
    await axios.post(`${process.env.REACT_APP_SERVER_ADDR}/oauth/github`, { authorizationCode });
    window.location.replace('/');
  }
};
