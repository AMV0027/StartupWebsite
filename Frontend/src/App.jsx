import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;