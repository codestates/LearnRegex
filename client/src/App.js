import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import QuizForm from './components/QuizForm';

// TODO Userinfo DevCode
import SignIn from './components/userinfo/signin';

function App() {
  return (
    <>
      <Navigation />
      <SignIn />
      <hr />
      <QuizForm />
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
