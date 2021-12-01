import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      <Route path="/" element={<Sidebar />} />
    </Routes>
  );
}

export default App;
