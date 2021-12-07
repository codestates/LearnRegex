import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';

import getquizzes from './quiz/getquizzes';
import getquiz from './quiz/getquiz';
import answer from './answer';
import bookmark from './bookmark';
import list from './list';
import isLogin from './isLogin';

const persistConfig = {
  key: 'root', // localStorage에 저장합니다.
  storage, // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['isLogin', 'answer', 'bookmark', 'list'], // blacklist -> 그것만 제외합니다.
};

const rootReducer = combineReducers({ getquizzes, getquiz, answer, bookmark, list, isLogin });
export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;
