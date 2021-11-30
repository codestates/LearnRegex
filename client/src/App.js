import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// TODO Userinfo DevCode
import SignIn from './components/userinfo/SignIn';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <SignIn />
      <hr></hr>
    </>
  );
}

export default App;

// TODO: 각 페이지 route 연결
