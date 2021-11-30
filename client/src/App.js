import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';

// TODO Userinfo DevCode
import SignIn from './components/userinfo/SignIn';
import SignUp from './components/userinfo/SignUp';
import QuizForm from './components/QuizForm';
dotenv.config();

function App() {
  return (
    <>
      {/* <SignIn /> */}
      {/* <hr /> */}
      <SignUp />
      <hr />
      {/* <QuizForm /> */}
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
