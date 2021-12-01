import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';

// TODO Userinfo DevCode

import SignIn from './components/userinfo/SignIn';
import SolveQuiz from './pages/SolveQuiz';
import MakeQuiz from './pages/MakeQuiz';
dotenv.config();

function App() {
  return (
    <>
      <SignIn />
      <hr />
      <MakeQuiz />
      {/* <SignIn /> */}
      {/* <hr /> */}
      {/* <SignUp /> */}
      {/* <hr /> */}
      {/* <QuizForm /> */}
      {/* <SolveQuiz /> */}
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
