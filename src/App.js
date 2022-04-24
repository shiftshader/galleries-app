import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation'
import Slider from './components/Slider'
// import About from './pages/About'
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navigation />
    <Home />
    <Slider />
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
