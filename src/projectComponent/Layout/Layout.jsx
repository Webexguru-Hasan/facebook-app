import React from 'react'
import Footer from '../Shared/Footer/Footer'
import Headar from '../Shared/Headar/Headar'

export default function Layout({children}) {
    return (
        <div>
            <Headar />
            {children}
            <Footer />
            
        </div>
    )
}
