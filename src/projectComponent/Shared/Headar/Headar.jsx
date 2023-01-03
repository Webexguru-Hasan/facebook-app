import React from 'react'
import { useContext } from 'react'
import { users } from '../../../App'
import HeadarStyle from './Headar.module.css'

function Headar() {
    const user = useContext(users)
    
    
    
    return (
        <div className={HeadarStyle.HeadarMain}>
            <div className={HeadarStyle.logo}>
                <img src="logo-education.png" alt="" />
            </div>

            <div className={HeadarStyle.menu}>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Contact</a></li>
                    {user.loggedIn && (
                        <li><a href='#'>DashBoard</a></li>

                    )}
                    
                </ul>
            </div>

            <div className={HeadarStyle.navBtn}>
                {user.loggedIn ? <button type='button' onClick={() => user.setLoggedIn(false)}>Logout</button> : <button type='button' onClick={() => user.setLoggedIn(true)}>Login</button>}
                
                

            </div>
        </div>
    )
}

export default Headar
