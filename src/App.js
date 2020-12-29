import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
