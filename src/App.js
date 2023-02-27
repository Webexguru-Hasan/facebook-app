import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductData from './Components/ProductData';
import Home from './Pages/Home';





function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
