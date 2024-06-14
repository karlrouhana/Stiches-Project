import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Education from './Pages/Education/Education';
import Card from './Components/Card/Card';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Card value='Over 2000 Students Enrolled' star={true}/>
    </>
  )
}

export default App
