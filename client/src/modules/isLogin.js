const SET_IS_LOGIN = 'SET_IS_LOGIN';

export const setIsLogin = (boolean) => ({ type: SET_IS_LOGIN, boolean });

const initialState = { isLogin: false };

export default function isLogin(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOGIN:
      return {
        isLogin: action.boolean,
      };
    default:
      return state;
  }
}
