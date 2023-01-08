import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { users } from './Contexts'

function UserContext({children}) {
    // const user = useContext(users)
    // const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)

    const sessionUser = localStorage.getItem('userInformation')

    const parseUser = JSON.parse(sessionUser)
    const userInfo = {
        parseUser,
        
        loading : loading,
        setLoading : setLoading
    }
    

    
    
    return (
        <div>

            <users.Provider value={userInfo}>
                {children}

            </users.Provider>
            
        </div>
    )
}

export default UserContext
