import React from 'react'
import { formatToLocalTime } from './WeatherData'

const TimeAndLocation = ({ weatherD: { dt, timezone, name, country } }) => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <p className='text-lg text-white'>{formatToLocalTime(dt, timezone)}</p>
            </div>
            <div>
                <h2 className='text-center text-2xl text-white'>{`${name}, ${country}`}</h2>
            </div>
        </div>
    )
}

export default TimeAndLocation
