import React from 'react';
import Forcast from './Components/Forcast';
import Input from './Components/Input';

import TopButton from './Components/TopButton';
import WeatheAndDetails from './Components/WeatheAndDetails';
import TimeAndLocation from './Components/TimeAndLocation';
import getFormattedWeatherData from './Components/WeatherData';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [query, setQuery] = useState({q: "Dhaka"})
  console.log(query)
  const [unit, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)
  console.log(weather)

  useEffect(() => {
    async function fetchWeather() {
      const message = query.q ? query.q : 'current location'
      toast.info("fetching weather from" + message)
       await getFormattedWeatherData({...query, unit}).then((data) => {

        toast.success(`successfully featched weather for ${data.name}, ${data.country}`)
        setWeather(data)
       })
      
    }
    fetchWeather()

  }, [query, unit])

 
  
  
  return (
  <div className='mx-auto w-1/2 mt-4 py-5 px-20 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
    <TopButton setquery={setQuery} />
    <Input setquery={setQuery} unit={unit} setunits={setUnits} />

    {weather && (
      <>
      <TimeAndLocation weatherD={weather} />
      <WeatheAndDetails weatherd={weather} />
      <Forcast title='hourly forcast'/>
      <Forcast title='daily forcast'/>

      <ToastContainer autoClose={3000} theme='colored' newestOnTop={true} />
      </>

    )}

    
    

    
   

  </div>

  )
}

export default App;
