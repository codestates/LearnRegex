import React from 'react';
import './App.css';
import QuizList from './pages/QuizList';
import SolveQuiz from './pages/SolveQuiz';
import EditQuiz from './pages/EditQuiz';
import MakeQuiz from './pages/MakeQuiz';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <>
      <EditQuiz />
      <hr />
      <MakeQuiz />
    </>
  );
}

export default App;
