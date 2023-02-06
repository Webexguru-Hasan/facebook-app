
import React, { useEffect, useState } from 'react'
import ShowWeather from '../Pages/ShowWeather'



const GetWeather = () => {
    const [data, setData] = useState([])
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)

        })
        async function fetchdata(){
            const res = await fetch(`${process.env.REACT_APP_API_URL}`)
            const datas = await res.json()
            setData(datas)
            console.log(datas)
        }
        fetchdata()
       
}, [])

return (
    
            <>
            {(typeof data.main != 'undefined') ? (
        <ShowWeather weatherData={data}/>
      ): (
        <div></div>
      )}
            </>
            
            
        
    )
}

export default GetWeather
