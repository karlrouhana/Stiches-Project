import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Education from './Pages/Education/Education';
import Works from './Pages/Works/Works';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Works />
    </>
  )
}

export default App
