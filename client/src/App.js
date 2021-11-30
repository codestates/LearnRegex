import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// TODO Userinfo DevCode
import SignIn from './components/userinfo/signin';
import QuizForm from './components/QuizForm';

function App() {
  return (
    <>
      <SignIn />
      <hr />
      <QuizForm />
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
