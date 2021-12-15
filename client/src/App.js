import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import QuizList from './pages/quiz/QuizList';
import MyInfo from './pages/myinfo';
import ModifyMyInfo from './pages/myinfo/modify';
import SetNewPassword from './pages/myinfo/SetNewPassword';
import SolveQuiz from './pages/quiz/SolveQuiz';
import EditQuiz from './pages/quiz/EditQuiz';
import MakeQuiz from './pages/quiz/MakeQuiz';
import Footer from './components/footer/Footer';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/modify" element={<ModifyMyInfo />} />
        <Route path="/quizlist" element={<QuizList />} />
        <Route path="/newpw" element={<SetNewPassword />} />
        <Route path="/quiz/:id" element={<SolveQuiz />} />
        <Route path="/makequiz" element={<MakeQuiz />} />
        <Route path="/editquiz/:id" element={<EditQuiz />} />
      </Routes>
    </>
  );
}

export default App;
