import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';

// TODO Userinfo DevCode

import SignIn from './components/userinfo/SignIn';
import EditQuiz from './pages/EditQuiz';
dotenv.config();

function App() {
  return (
    <>
      <SignIn />
      <hr />
      <EditQuiz />
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
