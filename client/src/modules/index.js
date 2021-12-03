import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';

import quizzes from './quiz/getquizzes';
import quiz from './quiz/getquiz';
import answer from './answer';

const persistConfig = {
  key: 'root', // localStorage에 저장합니다.
  storage, // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['answer'], // blacklist -> 그것만 제외합니다.
};

const rootReducer = combineReducers({ quizzes, quiz, answer });
export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;
