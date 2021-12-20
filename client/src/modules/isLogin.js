const SET_IS_LOGIN = 'SET_IS_LOGIN';
const SET_NICKNAME = 'SET_NICKNAME';

export const setIsLogin = (boolean) => ({ type: SET_IS_LOGIN, boolean });
export const setNickname = (nickname = '') => ({ type: SET_NICKNAME, nickname });

const initialState = { isLogin: false, nickname: '' };

export default function isLogin(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.boolean,
      };
    case SET_NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      };
    default:
      return state;
  }
}
