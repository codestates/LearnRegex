import { setIsLogin, setNickname } from '../modules/isLogin';
import { store } from '../index';

export function checkIsLogin(res) {
  let isLogin = false;
  let nickname = '';

  // isLogin 헤더 확인
  // console.dir(res);
  // console.log('---성공---');
  // console.dir(res.response);
  // console.log('---실패---');
  if (!!res.response && !!res.response.headers) isLogin = res.response.headers.islogin;
  else isLogin = res.headers.islogin;

  // nickname 저장
  // res.data.nickname 또는 res.data.data.nickname;
  // console.log(res.data);
  if (!!res.data && !!res.data.nickname) {
    nickname = res.data.nickname;
    if (!!res.data.data && !nickname) nickname = res.data.data.nickname;
  }

  if (nickname !== '') store.dispatch(setNickname(nickname));
  store.dispatch(setIsLogin(isLogin === 'true'));
}

export function checkUserIsLogin() {
  const isLogin = store.getState().isLogin.isLogin;
  return isLogin || false;
}

export function checkUserNickname() {
  const nickname = store.getState().isLogin.nickname;
  return nickname || '';
}
