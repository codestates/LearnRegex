import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './components/user/SignIn'; // it works
import FindPassword from './components/user/FindPassword';
import GetMyInfo from './pages/myinfo/GetMyInfo';
import SetNewPassword from './pages/myinfo/SetNewPassword';
import EditUserInfo from './pages/myinfo/EditUserInfo'; // it works
import EditUserPassword from './pages/myinfo/EditUserPassword'; // it works
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
      <hr />
      <GetMyInfo />
      <hr />
    </>
  );
}

export default App;
