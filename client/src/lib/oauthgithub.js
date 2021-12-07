import axios from 'axios';
axios.defaults.withCredentials = true;

export const githubLogin = () => {
  console.log('login');
  // window.location.href = ``;
};

export const githubCallback = async (url) => {
  console.log('callback');
  // if (url.search) {
  //   const authorizationCode = url.search.split('=')[1].split('&')[0];
  //   await axios.post(``, { authorizationCode });
  //   window.location.replace('/');
  // }
};
