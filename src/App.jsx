import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Stage from './Components/Stage/Stage';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Stage  title='Steamlined Application Submition' 
              content='Apply to multiple institutions seamlessly through one platform, simplifying the process.' 
              color='pink' 
              faded={true}
      />
    </>
  )
}

export default App
