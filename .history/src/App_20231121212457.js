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
            <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
  );
}

export default App;