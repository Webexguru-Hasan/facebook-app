import React from 'react'
import { useContext } from 'react'
import { themeSwitch } from '../Contexts/Contexts'
import Footer from '../Shared/Footer/Footer'
import Headar from '../Shared/Headar/Headar'

export default function Layout({children}) {
    const theme = useContext(themeSwitch)
    
    return (
        <div className={
            theme.theme === 'light' 
            ? 'lighttheme' : 
            theme.theme === 'red' 
            ? 'redtheme' 
            :'darktheme'}
        >
            <Headar />
            <main>{children}</main>
            <Footer />
            
        </div>
    )
}
