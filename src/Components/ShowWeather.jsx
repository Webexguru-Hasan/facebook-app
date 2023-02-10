import React from 'react'
import result from '../Components/Styles/ShowWeather.module.css'

const ShowWeather = ({weatherDatas}) => {
    console.log({weatherDatas})
    const isDay = weatherDatas?.weather[0].icon?.includes('d')
    return (
        <>
            <div className={result.Container}>
        <span className={result.AppTitle}>React Weather App</span>

        <div className={result.InfoContainer} >
            
            < span className={result.InfoLabel} >
            {(weatherDatas?.main.temp-273).toFixed(2)}°C <span>{`|${weatherDatas?.weather[0].description}`}</span>
            </span>
            < img className={result.InfoIcon}  src='./Icons/cloudy-night.svg'/>
        </div>
        
        <div className={result.WeatherContainer}>
        <span className={result.condition}>{weatherDatas?.name}</span>
        </div>
        <span className={result.WeatherInfoLabel} >Weather Info</span>

        <div className={result.WeatherInfoContainer}>

            <div className={result.WeatherResult}>
                <img src={isDay ?'./Icons/cloudy-night.svg' :"./Icons/temp.svg"} alt="" />
                <span className={result.span}>
                {isDay ? weatherDatas?.sys.Sunset :weatherDatas?.sys.Sunrise }
                <span>{isDay ?  "Sunset":"Sunrise" }</span>
                </span> 
            </div>

            <div className={result.WeatherResult}>
                <img src="./Icons/humidity.svg" alt="" />
                <span className={result.span}>{weatherDatas?.main.humidity}
                <span>Humidity</span>
                </span> 
            </div>

            <div className={result.WeatherResult}>
                <img src="./Icons/wind.svg" alt="" />
                <span className={result.span}>{weatherDatas?.wind.speed}
                <span>Wind</span>
                </span> 
            </div>

            <div className={result.WeatherResult}>
                <img src="./Icons/pressure.svg" alt="" />
                <span className={result.span}>{weatherDatas?.main.pressure}
                <span>Pressure</span>
                </span> 
            </div>

            
        </div>
        
    </div>
            
        </>
    )
}

export default ShowWeather
