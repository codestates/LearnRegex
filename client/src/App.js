import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/user/SignUp';
import EditUserInfo from './pages/myinfo/EditUserInfo';
import EditUserPassword from './pages/myinfo/EditUserPassword';
import GetMyInfo from './pages/myinfo/GetMyInfo';
import QuizForm from './components/QuizForm';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './components/user/SignIn';
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
      <SignIn />
      <SetNewPassword />
    </>
  );
}

export default App;
