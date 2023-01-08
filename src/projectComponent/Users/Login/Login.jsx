import React, { useContext, useState } from 'react'
import { users } from '../../Contexts/Contexts';
// import { BsFillPatchCheckFill } from 'react-icons/bs'


function Login() {
    const user = useContext(users)
    

    const [login, setLogin] = useState({
        email : '',
        password : ''
    })
    
    async function handleLogin (){
    try{
        // user.setLoading(false)
        const res = await fetch('https://blogs-webiste-api.onrender.com/users/signin',{
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body : JSON.stringify(login)
        },
        
        );
        const result = await res.json()
        // user.setLoggedIn(true)
        // user.setLoading(true)

        localStorage.setItem('userInformation', JSON.stringify(result))
        
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
