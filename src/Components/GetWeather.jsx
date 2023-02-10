import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from '../Components/Styles/GetWeather.module.css'
import ShowWeather from './ShowWeather'

const GetWeather = () => {
    const [data, setData] = useState({})
    
    const [cityName, setCItyName] = useState("")
    // const naviGate = useNavigate()
    

    useEffect(() => {
        try {
            async function fetchData(cityName){
                const response = await fetch(`${process.env.REACT_APP_API_URL}`)
                const datas = await response.json()
                setData(datas)
                
                
            }
            fetchData()
            
        } 
        catch (error) {
            console.error(error)
        }
    
    }, [])

    function onInputChange(e){
        
        setCItyName(e.target.value)
    }

    function handleSubmit(e){
        // e.preventDefault()
        setCItyName(cityName)
        console.log(cityName)

        
}

function handleEnterKey(e){
    if(e.keyCode === 13){
        return handleSubmit()
    }
}
    return (
        <>
        {data !== undefined ? (
            <>
            <div className={Style.Container}>
     <span className={Style.AppTitle}>React Weather App</span>
     <img className={Style.WelcomeWeatherLogo} src="weather.png" alt="" />
     <span className={Style.ChooseCityLabel}>Find Weather of your city
     </span>

     <div className={Style.SearchBox}>
         <input type="text" placeholder="Enter Your City" onChange={onInputChange} onKeyDown={handleEnterKey} />
         <button  type={"submit"} onClick={handleSubmit}>Search</button>
     </div>
   </div>
            </>
        ): (<ShowWeather weatherDatas={data} />)}
            
            
            
        </>
    )
}

export default GetWeather
