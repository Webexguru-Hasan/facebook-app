
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Layout from './Pages/Layout';




function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default App;
