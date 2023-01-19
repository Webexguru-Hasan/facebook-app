import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)
    
    function handleStart(){
        setStartTime(Date.now())
        setNow(Date.now())

        intervalRef.current = setInterval(() =>{
            setNow(Date.now())
            
        }, 10)
        // clearInterval(intervalRef.current)

    }
    // console.log(intervalRef.current)

    function handleStop(){
        clearInterval(intervalRef.current)
    }

    console.log(intervalRef.current);

    let seccond = 0

    if (startTime != null && now != null){
        seccond = (now - startTime) / 1000
    }
     
    return (
        <>
        <h1>Time Passed :{seccond.toFixed(2)} </h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
            
        </>
    )
}

export default StopWatch
