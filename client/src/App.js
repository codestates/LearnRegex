import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// TODO Userinfo DevCode
import SignIn from './components/userinfo/signin';
import SolveQuiz from './pages/SolveQuiz';

function App() {
  return (
    <>
      <SignIn />
      <hr />
      <SolveQuiz />
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
