import React, { useState } from 'react'

export default function MoveMouse() {

    const [position, setposition] = useState({
        x: 0,
        y: 0
    })
    return (
        <>
        <div onPointerMove={(e) => setposition({
            x: e.clientX,
            y: e.clientY
        }) 
            
        }

        style={{
            position: 'relative',
            width: "100vw",
            height: "100vh"
        }}
        ></div>
        
        <div style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: 0,
            top: 0,
            width: 30,
            height: 30


        }}>
            
        </div>
        </>
    )
}
