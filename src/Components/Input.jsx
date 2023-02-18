import React from 'react'
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Input = ({setquery, unit, setunits}) => {

    const [city, setCity] = useState('')

   const handleSearch = () => {
        if(city !== ""){
            setquery({q: city})
        }
    }

    const handleEnter = (e) => {
        if(e.keyCode === 13){
            handleSearch()
        }
    }

    const handleLocation = () => {
        if(navigator.geolocation){
            toast.info("featching User location")
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success("Location Featched")
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setquery({lat, lon})
            })
        }
    }

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(unit !== selectedUnit) setunits(selectedUnit)
            
        
    }
    
    
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row justify-center items-center w-3/4'>
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} onKeyDown={handleEnter} type="text" className='text-lg text-gray p-2 w-full focus:outline-none rounded shadow-xl' placeholder='search your city' />
                <UilSearch onClick={handleSearch} size={25} className='text-white ml-2 cursor-pointer transition ease-out hover:scale-125'/>
                <UilMapMarker onClick={handleLocation} size={25} className='text-white ml-2 cursor-pointer transition ease-out hover:scale-125'/>
                
            </div>
            <div className='flex flex-row items-center justify-center ml-5'>
                <button onClick={handleUnitChange} name='metric' className='text-xl text-white '>°C</button>
                <p className='text-lg text-white mx-2 mt-3'>|</p>
                <button onClick={handleUnitChange} name='imperial' className='text-xl text-white'>°F</button>
                
            </div>
            
        </div>
    )
}

export default Input
