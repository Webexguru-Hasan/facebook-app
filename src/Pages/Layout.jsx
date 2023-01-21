import React from 'react'
import { Link } from 'react-router-dom'


const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blogs'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout
