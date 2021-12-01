import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';

// TODO Userinfo DevCode

import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import EditUserInfo from './pages/myinfo/EditUserInfo';
import EditUserPassword from './pages/myinfo/EditUserPassword';
import QuizForm from './components/QuizForm';
import SolveQuiz from './pages/SolveQuiz';
dotenv.config();

function App() {
  return (
    <>
      <SignIn />
      <hr />
      <EditUserInfo />
      <hr />
      <EditUserPassword />
      <hr />
      <SignUp />
      {/* <QuizForm /> */}
      {/* <SolveQuiz /> */}
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
