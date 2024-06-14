import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Education from './Pages/Education/Education';
import Works from './Pages/Works/Works';
import Testimonials from './Pages/Testimonials/Testimonials';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Works />
      <Testimonials />
    </>
  )
}

export default App
