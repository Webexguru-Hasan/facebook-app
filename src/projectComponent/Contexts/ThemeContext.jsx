import React, { useContext } from 'react'
import { useState } from 'react'
import { themeSwitch } from './Contexts'

function ThemeContext({children}) {

    const [theme, settheme] = useState('light')

    const themeInfo = {
        theme : theme,
        settheme : settheme
    }
    return (
        <div>
            <themeSwitch.Provider value={themeInfo}>
                {children}

            </themeSwitch.Provider>
            
        </div>
    )
}

export default ThemeContext

