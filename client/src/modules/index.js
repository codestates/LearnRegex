import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import getquizzes from './quiz/getquizzes';
import getquiz from './quiz/getquiz';
import answer from './answer';
import bookmark from './bookmark';
import list from './list';
import isLogin from './isLogin';
import modal from './modal';

const persistConfig = {
  key: 'root', // localStorage 저장
  storage,
  whitelist: ['isLogin', 'answer', 'bookmark', 'list'],
};

const rootReducer = combineReducers({ getquizzes, getquiz, answer, bookmark, list, isLogin, modal });
export default persistReducer(persistConfig, rootReducer);
