import React from 'react'

export default function Box(props) {
    return (
        <div style={{width: '500px', height: "500px", border: "1px solid orange"}}>
            
            {props.children}
            
        </div>
    )
}
