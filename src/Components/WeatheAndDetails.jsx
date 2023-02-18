import React from 'react'
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun,UilSunset    } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from './WeatherData'

const WeatheAndDetails = ({weatherd: {
    details,icon, temp, temp_min, temp_max, sunrise, sunset, speed,
    humidity, feels_like, timezone
}}) => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <p className='text-lg text-cyan-300'>{details}</p>
            </div>
        <div className='flex justify-between items-center my-3'>
            <div>
                <img src={iconUrlFromCode(icon)} alt="" />
            </div>
            <div>
                <h2 className='text-5xl text-white font-bold'>{`${temp.toFixed()}`}°</h2>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <UilTemperature size={18} className='text-white ' />
                    <p className='text-gray-200 text-sm'>Real Feel : <span className='text-yellow-400'>{`${feels_like.toFixed()}`}°</span></p>
                </div>
                <div className='flex justify-center'>
                    <UilTear size={18} className='text-white ' />
                    <p className='text-gray-200 text-sm'>Humidety : <span className='text-yellow-400'>{`${humidity}%`}</span></p>
                </div>
                <div className='flex justify-center'>
                    <UilWind size={18} className='text-white ' />
                    <p className='text-gray-200 text-sm'>Wind Speed : <span className='text-yellow-400'>{`${speed} km/h`}</span></p>
                </div>
            </div>
            
        </div>
        <div className='flex flex-row justify-center items-center'>
            <div className='flex justify-between mr-2'>
                <UilSun size={22} className='text-light' />
                <p className='text-[16px] text-yellow-500 pl-1 font-medium'>Sun : {formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
                <p className='text-[16px] text-white'>|</p>
            </div>
            <div className='flex justify-between mr-2'>
                <UilSunset size={22} className='text-light' />
                <p className='text-[16px] text-yellow-500 pl-1 font-medium'>Set : {formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
                <p className='text-[16px] text-white'>|</p>
            </div>
            <div className='flex justify-between mr-2'>
                <UilArrowUp size={22} className='text-light' />
                <p className='text-[16px] text-yellow-500 pl-1 font-medium'>High : {temp_max.toFixed()}°</p>
                <p className='text-[16px] text-white'>|</p>
            </div>
            <div className='flex justify-between'>
                <UilArrowDown size={22} className='text-light' />
                <p className='text-[16px] text-yellow-500 pl-1 font-medium'>Low : {temp_min.toFixed()}°</p>
                
            </div>
        </div>
        </div>
    )
}

export default WeatheAndDetails
