import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import QuizList from './pages/quiz/QuizList';
import CheatSheet from './pages/CheatSheet';
import GetMyInfo from './pages/myinfo/GetMyInfo';
import EditUserInfo from './pages/myinfo/EditUserInfo';
import EditUserPassword from './pages/myinfo/EditUserPassword';
import SetNewPassword from './pages/myinfo/SetNewPassword';
import SolveQuiz from './pages/quiz/SolveQuiz';
import EditQuiz from './pages/quiz/EditQuiz';
import MakeQuiz from './pages/quiz/MakeQuiz';
import Footer from './components/footer/Footer';
import SingIn from './components/user/SignIn';
import dotenv from 'dotenv';
import './App.css';
dotenv.config();

function App() {
  return (
    <>
      <Navigation />
      <SingIn />
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
        <Route path="/editquiz/:id" element={<EditQuiz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
