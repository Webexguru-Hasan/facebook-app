import React, { useEffect, useRef } from 'react'

const WellComponent = ({type, placeholder, value, onClick}) => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    

   
    
    return <input ref={inputRef} type={type} placeholder={placeholder} value={value}/>
        

    
    
            
}

export default WellComponent
