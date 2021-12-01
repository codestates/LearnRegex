import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './components/userinfo/SignIn';
import QuizList from './pages/QuizList';
import SolveQuiz from './pages/SolveQuiz';
import EditQuiz from './pages/EditQuiz';
import MakeQuiz from './pages/MakeQuiz';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      <Route path="/" element={<Sidebar />} />
    </Routes>
  );
}

export default App;
