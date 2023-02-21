import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import navbar  from '../../Styles/Headar.module.css';
import {BsFillCartCheckFill} from 'react-icons/bs'

const Headar = () => {

    let activeStyle = {
        textDecoration: "underline",
        color: '#05718e'
      };

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="container">
                <NavLink to='/'><img className={navbar.logo} src="logo-education.png" alt="" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div classname="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item fs-5 fw-semibold pe-4">
                            <NavLink to='/' className='nav-link'
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }>Home</NavLink>
                        </li>
                        <li className="nav-item fs-5 fw-semibold pe-4">
                            <NavLink className='nav-link' to='/product' 
                            >Products</NavLink>
                        </li>
                        <li className="nav-item fs-5 fw-semibold pe-4">
                            <NavLink className='nav-link' to='/about' 
                            >About us</NavLink>
                        </li>
                        <li className="nav-item fs-5 fw-semibold">
                            <NavLink className='nav-link' to='/contact' 
                            >Contact</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <Link to='/login' className={navbar.login}>Login</Link>
                    <Link to='/register' className={navbar.login}>register</Link>
                    <BsFillCartCheckFill />
                </div>
            </div>
        </nav>
        </>
    )
}

export default Headar
