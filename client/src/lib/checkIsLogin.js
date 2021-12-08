import { setIsLogin } from '../modules/isLogin';
import { store } from '../index';

export function checkIsLogin(res) {
  console.dir(res);
  let isLogin = false;
  if (!!res.response) isLogin = res.response.headers.islogin;
  else isLogin = res.headers.islogin;
  console.log(isLogin);
  store.dispatch(setIsLogin(isLogin === 'true'));
}
