import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import QuizList from './pages/QuizList';
import CheatSheet from './pages/CheatSheet';
import GetMyInfo from './pages/myinfo/GetMyInfo';
import EditUserInfo from './pages/myinfo/EditUserInfo';
import EditUserPassword from './pages/myinfo/EditUserPassword.js';
import SetNewPassword from './pages/myinfo/SetNewPassword.js';
import SolveQuiz from './pages/SolveQuiz';
import MakeQuiz from './pages/MakeQuiz.js';
import EditQuiz from './pages/EditQuiz.js';
import dotenv from 'dotenv';
import './App.css';
dotenv.config();

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/cheatsheet" element={<CheatSheet />} />
        <Route path="/myinfo" element={<GetMyInfo />} />
        <Route path="/editinfo" element={<EditUserInfo />} />
        <Route path="/quizlist" element={<QuizList />} />
        <Route path="/editpw" element={<EditUserPassword />} />
        <Route path="/newpw" element={<SetNewPassword />} />
        <Route path="/quiz/:id" element={<SolveQuiz />} />
        <Route path="/makequiz" element={<MakeQuiz />} />
        <Route path="/editquiz" element={<EditQuiz />} />
      </Routes>
    </>
  );
}

export default App;
