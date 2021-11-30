import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// TODO Userinfo DevCode
import SignIn from './components/userinfo/signin';
import SolveQuiz from './pages/SolveQuiz';
import InputQuiz from './components/InputQuiz';

function App() {
  return (
    <>
      <SignIn />
      <hr />
      <SolveQuiz />
      <hr />
      <InputQuiz />
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
