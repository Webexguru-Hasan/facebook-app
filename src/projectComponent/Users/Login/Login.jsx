import React, { useContext, useState } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { users } from '../../../App'

function Login() {
    const user = useContext(users)
    

    const [login, setLogin] = useState({
        email : '',
        password : ''
    })

    console.log(user.loading);
    

  async function handleLogin (){
    try{
        user.setLoading(true)
        const res = await fetch('https://blogs-webiste-api.onrender.com/users/signin',
        {
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body : JSON.stringify(login)
        },
        
        )
        const result = res.json()
        
        user.setLoggedIn(true)
        user.setLoading(false)
    }
    catch(error) {
        console.error(error.message)
    }
    

    }
   

    return (
        <div>

            <input type="email" placeholder='your-email' onChange={(e) =>  setLogin({
                ...login,
                email : e.target.value
            })} />
            <input type="password" placeholder='your-password'
            onChange = {(e) => setLogin({
                ...login,
                password : e.target.value
            })}
            />
            <button type='button' onClick={handleLogin}>Login</button>
            
        </div>
    )
}

export default Login
