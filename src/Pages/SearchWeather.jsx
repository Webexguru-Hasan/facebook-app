import React from 'react'
import { Link } from 'react-router-dom'

const SearchWeather = () => {
    return (
        <>
        <div className='contanier w-[600px] mx-auto bg-emerald-200 py-10' >
            <div className='w-28 h-28 mx-auto mb-10'>
                <img className='' src="weather.png" alt="" />
            </div>
            <div className='flex justify-center'>
                <div><input className='bg-gray-300 w-[300px] h-9 px-5' type="text" placeholder='Enter city- Name' /></div>
                <div>
                <button className='bg-white h-9 w-[150px]'><Link to='/getWeather'>Search Weather</Link></button>
                </div>
                
                
            </div>
        </div>
            
        </>
    )
}

export default SearchWeather
