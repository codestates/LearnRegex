import React from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';

// TODO Userinfo DevCode

import SignIn from './components/userinfo/SignIn';
import QuizList from './pages/QuizList';
import SolveQuiz from './pages/SolveQuiz';
import EditQuiz from './pages/EditQuiz';
import MakeQuiz from './pages/MakeQuiz';
dotenv.config();

function App() {
  return (
    <>
      <SignIn />
      <hr />
      <QuizList />
      <hr />
      <SolveQuiz />
      <hr />
      <EditQuiz />
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
