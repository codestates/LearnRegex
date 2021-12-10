const SET_IS_LOGIN = 'SET_IS_LOGIN';

export const setIsLogin = (boolean, nickname = '') => ({ type: SET_IS_LOGIN, boolean, nickname });

const initialState = { isLogin: false, nickname: '' };

export default function isLogin(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        isLogin: action.boolean,
        nickname: action.nickname,
      };
    default:
      return state;
  }
}
