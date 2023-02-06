import React from 'react'
import moment from 'moment/moment'

const ShowWeather = ({weatherData}) => {
    console.log({weatherData})
    
    return (
        <>
        <div className='container w-[800px] mx-auto bg-slate-800 rounded'>
            <div className='items-center pt-10'>
            
            <h1 className='text-white text-center text-[30px] bg-blue-500 rounded-t-2xl'>City Name: <span className='text-[20px] text-yellow-400'>{weatherData.name}</span> </h1>

            </div>
            <div className='w-[400px] container mx-auto bg-slate-200 rounded-t-full ' >
                <div className='flex justify-around items-center pt-10 border-b-black '>
                <p  className="text-[20px] text-black"> {moment().format('dddd')}</p>
                <div>
                <p className="day">{moment().format('LL')}</p>
                <p className="sunrise-sunset"> {new Date().toLocaleTimeString()}</p>
                {/* <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> */}
                </div>

                </div>
                <div className='flex justify-around items-center'>
            <p>Temprature: {weatherData.main.temp} &deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity} %</p>

            </div>
            
            </div>
           

            
            <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p> Sunset :{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {weatherData.weather[0].main}</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
        </div>
            
        </>
    )
}

export default ShowWeather
