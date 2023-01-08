import React from 'react'

import { useState } from 'react'


function Register() {

    const [register, setRegister] = useState({
        name : '',
        email : '',
        password : '',
        confirmPassword : ''

    })

    async function handleRegistration() {
        try{
            const response = await fetch('https://blogs-webiste-api.onrender.com/users/signup',
        {
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
              },

              body : JSON.stringify(register)
        },

        )
        const results = response.json()
        
        }
        catch(error) {
            console.error(error.message)
        }
    }

    
    return (
        <div>
            <input type="name" placeholder='name' onChange={(e) => setRegister({
                ...register,
                name : e.target.value
                
            })}/>
            <input type="email" placeholder='email' onChange={(e) => setRegister({
                ...register,
                email : e.target.value
                
            })} />
            <input type="password" placeholder='password' onChange={(e) => setRegister({
                ...register,
                password : e.target.value
                
            })} />
            <input type="confirmPassword"placeholder='confirmPassword' onChange={(e) => setRegister({
                ...register,
                confirmPassword : e.target.value
                
            })} />
            <button type='button' onClick={handleRegistration}>signUp</button>
        </div>
    )
}

export default Register
