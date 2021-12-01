import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
