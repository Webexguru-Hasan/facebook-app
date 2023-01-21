import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div>
            <img src="dev_shape.png" alt="" style={{width : '120px'}} />
        </div>
            <Link to='/'>Home</Link>
            <Link to='/Blog'>Blog</Link>
            <Link to='About'>About Us</Link>
            <Link to='Contact'>Contact</Link>
        </>
    )
}

export default Navbar
