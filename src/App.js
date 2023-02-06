import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetWeather from './Components/GetWeather';
import SearchWeather from './Pages/SearchWeather';
import ShowWeather from './Pages/ShowWeather';




function App() {
  
  return (
  <div>
    <BrowserRouter>
    <SearchWeather />
    <Routes>
      <Route path='/getWeather' element={<GetWeather />} />
    </Routes>
    </BrowserRouter>

    
    
    

  </div>

  )
}

export default App;
