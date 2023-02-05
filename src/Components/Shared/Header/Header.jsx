import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({loggedIn}) => {

  const navigate = useNavigate()
  
  const navLink = "text-center md:px-4 w-full py-3 inline-block text-white text-lg uppercase";

  function handleLogout(){
    sessionStorage.removeItem('user')
    navigate('/login')
  }
  
  return (
    <nav style={{ backgroundColor: "black" }} className="sticky top-0 z-50">
      <div className="conainer mx-auto px-4 flex flex-col md:flex-row  justify-start md:justify-between md:items-center">
        <div className="flex justify-between w-full">
          <Link
            to="/"
            className="py-1 inline-block text-white text-lg uppercase"
          >
            Clever Learner
          </Link>
        </div>

        <ul className="md:flex flex-col md:flex-row items-center justify-center transition">
          <>
         
         {loggedIn && (
          <>
          <li className="w-full">
          <Link className={navLink} to={`/dashboard`}>
            Dashboard
          </Link>
        </li>
        <li className="w-full">
          <Link className={navLink} to={`/users`}>
            Users
          </Link>
        </li>
        </>

         )}

         {loggedIn ? (
          <li className="w-full">
          <button className={navLink} onClick={handleLogout}>
            Logout
          </button>
        </li>

         ): (<li className="w-full">
         <button className={navLink}>
          <Link to="/login">Login</Link>
         </button>
       </li>)}
       <li>
       <Link to='/add'>add quiz</Link>
       </li>
       </>
         
         
        
              </ul>
      </div>
    </nav>
  )
}

export default Header
