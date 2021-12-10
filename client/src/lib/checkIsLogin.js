import { setIsLogin } from '../modules/isLogin';
import { store } from '../index';

export function checkIsLogin(res) {
  console.dir(res);
  let isLogin = false;
  if (!!res.response && !!res.response.headers) isLogin = res.response.headers.islogin;
  else isLogin = res.headers.islogin;
  console.log(isLogin);
  store.dispatch(setIsLogin(isLogin === 'true'));
}

export function checkUserIsLogin() {
  const isLogin = store.getState().isLogin.isLogin;
  return isLogin || false;
}
