import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetWeather from './Components/GetWeather';


function App() {
  
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<GetWeather />} />
    </Routes>
    </BrowserRouter>
    

  </div>

  )
}

export default App;
