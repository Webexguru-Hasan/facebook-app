import React from 'react'
import Headar from '../Shared/Headar/Headar'
import Footer from '../Shared/Footer/Footer'



function Layout({children}) {
    return (
        <div>
            <Headar />
            {children}
            <Footer />
            
            
        </div>
    )
}

export default Layout
