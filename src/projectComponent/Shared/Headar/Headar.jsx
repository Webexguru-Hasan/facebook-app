import React from 'react'
import HeadarStyle from './Headar.module.css'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import { useContext } from 'react'
import { themeSwitch, users } from '../../Contexts/Contexts'

function Headar() {
    const user = useContext(users)
    const theme = useContext(themeSwitch)
   console.log(user);

    const {parseUser : userInfo} = user

    // function handlelogout(){
    //     localStorage.clear('user')
    //     console.log(localStorage.removeItem('users'));
    // }

    
    
    function changeColor(color){
        theme.settheme(color)
    }
    
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
                    {userInfo && (
                        <li><a href='#'>DashBoard</a></li>
                        )}
                </ul>
            </div>
            
            <div className={HeadarStyle.navBtn}>
                {userInfo ? 
                <button type='button' onClick={()=>localStorage.clear('userInfo')}>Logout</button> : <button type='button'>Login</button>}
                
                <select name="" id="" onChange={(e) => changeColor(e.target.value)}>
                    <option value="light">light</option>
                    <option value="black">black</option>
                    <option value="red">red</option>
                </select>

                {/* {theme.theme === 'light' 
                ? <button type='button' onClick={() => changeColor('dark')}><BsFillMoonFill /></button> 
                :  <button type='button' onClick={() => changeColor('light')}><BsFillSunFill /></button> } */}
                </div>
                </div>
                )
            }

export default Headar
