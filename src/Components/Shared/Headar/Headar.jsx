import React from 'react'
import headar from './headar.module.css'

export default function Headar() {
    return (
        <>
        <div className={headar.container}>
            <div className={headar.logo}>
                <img src="logo-education.png" alt="" />
            </div>
            <div className={headar.menu}>
                <ul>
                   <li><a href='#'>Home</a></li>
                   <li><a href='#'>Home</a></li>
                   <li><a href='#'>Home</a></li>
                   <li><a href='#'>Home</a></li>
                   
                </ul>
            </div>
            <div className={headar.btn}>
                <img src="logo-education.png" alt="" />
            </div>
        </div>
        </>
    )
}
