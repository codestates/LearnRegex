import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './components/user/SignIn';
import FindPassword from './components/user/FindPassword';
import SetNewPassword from './pages/myinfo/SetNewPassword';
import QuizList from './pages/QuizList';
import SolveQuiz from './pages/SolveQuiz';
import EditQuiz from './pages/EditQuiz';
import MakeQuiz from './pages/MakeQuiz';
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
