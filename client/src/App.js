import React from 'react';
import './App.css';
import SolveQuiz from './pages/SolveQuiz';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <>
      <SolveQuiz />
    </>
  );
}

export default App;
