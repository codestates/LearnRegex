import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import SignIn from './pages/SignIn';

//import QuizForm from './components/QuizForm';

// TODO Userinfo DevCode
//import SignIn from './components/userinfo/signin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
