import React, { useEffect, useState } from 'react'

const Geolocation = () => {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)

        })
    },[lat, long])
    return (
        <div>
            <h1>{lat}</h1>
            <h2>{long}</h2>
            
        </div>
    )
}

export default Geolocation
