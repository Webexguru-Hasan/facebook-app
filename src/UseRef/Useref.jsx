import React, { useEffect, useState } from 'react'

const Useref = () => {
    const increaseRef = React.useRef(0)
    console.log(increaseRef.current)
    const [increase, setIncrease] = useState(0)
    console.log(increase)
    useEffect(() => {
        increaseRef.current = increaseRef.current + 1
    })
    return (
        <>
        <button onClick={() => setIncrease(increase + 1)}>increase +</button>
        <h1>{increaseRef.current}</h1>
            
        </>
    )
}

export default Useref
