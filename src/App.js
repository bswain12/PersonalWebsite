import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './App.py';
import Navbar from './components/Navbar/Navbar';
//import Main from './components/Navbar/Main';
//import { BrowserRouter as Router, Routes, Route }
    //from 'react-router-dom';
import Main from './components/Navbar/Main';

const App = () => (
  <div className='app'>
    <h1>Brandon Swain Website</h1>
      <Navbar />
      <Main />
  </div>
);

export default App;