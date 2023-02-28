import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    return (
        <>
        <div className='flex justify-between items-center bg-black fixed w-full px-10 py-3'>
            <div className='logo'>
                <h1 className='text-5xl'><a className="no-underline text-white font-signature" href="#">Hasan</a></h1>
            </div>
            {/* logo-end */}
            
                <ul className='hidden md:flex'>
                    <li className='pl-10'><a className='text-white text-[20px] font-medium hover:scale-125 no-underline transition-all' href="#">Home</a></li>
                    <li className='pl-10'><a className='text-white text-[20px] font-medium hover:scale-125 no-underline transition-all' href="#">About Us</a></li>
                    <li className='pl-10'><a className='text-white text-[20px] font-medium hover:scale-125 no-underline transition-all' href="#">Portfolio</a></li>
                    <li className='pl-10'><a className='text-white text-[20px] font-medium hover:scale-125 no-underline transition-all' href="#">Blog</a></li>
                    <li className='pl-10'><a className='text-white text-[20px] font-medium hover:scale-125 no-underline transition-all' href="#">Contact</a></li>
                </ul>

                <div onClick={() => setNav(!nav)} className='text-white z-10 cursor-pointer md:hidden'>
                    {nav ? <FaTimes size={30} />: <FaBars size={30} /> }
                    
                </div>
                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute  top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white '>
                    <li><a className='text-white text-[18px] font-medium hover:text-[yellow] hover:scale-125' href="#">Home</a></li>
                        <li className='pt-2'><a className='text-white text-[18px] font-medium hover:text-[yellow] hover:scale-125' href="#">About Us</a></li>
                        <li className='pt-2'><a className='text-white text-[18px] font-medium hover:text-[yellow] hover:scale-125' href="#">Portfolio</a></li>
                        <li className='pt-2'><a className='text-white text-[18px] font-medium hover:text-[yellow] hover:scale-125' href="#">Blog</a></li>
                        <li className='pt-2'><a className='text-white text-[18px] font-medium hover:text-[yellow] hover:scale-125' href="#">Contact</a></li>
                    </ul>

                )}
                
                
                
            
            {/* navitems-end */}
            
        </div>
        </>
    )
}

export default Navbar
