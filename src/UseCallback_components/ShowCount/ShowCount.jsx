import React, { useState } from 'react'

const ShowCount = ({title}) => {
    console.log(`rendering ${title}` )
    const [count, setCount] = useState(0)

    function handleIncreamnt(){
        setCount((prevCount) => prevCount + 1)
    }

    function handleDecrement(){
        setCount((prevCount) => prevCount -1)
    }
    return (
        <div>
            <button onClick={handleIncreamnt}>Increament +</button>
            <button onClick={handleDecrement}>Decremeant -</button>
            <h1>Count: {count}</h1>
            
        </div>
    )
}

export default ShowCount
