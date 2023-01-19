import React, { useRef, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())
    const intervalTime = useRef(null)
    const [showTime, setShowTime] = useState(true)
    

    function handleStart(){
        intervalTime.current = setInterval(() => setTime(new Date()), 1000)
        setShowTime(true)

    }
    function handleStop(){
        
        intervalTime.current = clearInterval(intervalTime.current)
    }
    
    
    function handleClear(){
       setShowTime(false)
       intervalTime.current = clearInterval(intervalTime.current)
    }
    return (
        <div>
            {showTime && <h1>{time.toLocaleTimeString()}</h1>}
            
            <button onClick={handleStart}>StartTime</button>
            <button onClick={handleStop}>StopTime</button>
            <button onClick={handleClear}>ClearTime</button>
            
        </div>
    )
}

export default Clock
