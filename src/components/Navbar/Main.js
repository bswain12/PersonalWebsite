// Filename - "./components/Main.js

import React from "react";
import { Route, Routes } from 'react-router-dom';
import Contact from "../../pages/contact";
import About from "../../pages/about";
import Index from "../../pages/index";


const Main = () => (
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  );

export default Main;