import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.py';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello this is a new test again</h1>
        <h2>I like head-ings</h2>
      </header>
    </div>
    <r
  );
}

export default App;