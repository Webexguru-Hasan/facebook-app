
import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import Layout from './projectComponent/Layout/Layout';
import Posts from './projectComponent/Posts/Posts';
import Login from './projectComponent/Users/Login/Login'




 export const users = createContext()
 export const themeswitch = createContext()


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [theme, settheme] = useState('light')

  const userInfo = {
    loggedIn : loggedIn,
    setLoggedIn : setLoggedIn,
    loading: loading,
    setLoading: setLoading
  }
  
  const themeInfo = {
    theme : theme,
    settheme : settheme
  }
  
  return (
    <div className={theme === 'light' ? 'lighttheme' : 'darktheme'}>
    <users.Provider value={userInfo}>
      <themeswitch.Provider value={themeInfo}>
      
    <Layout>
    <Login />
      
      <Posts />
      
    </Layout>
    </themeswitch.Provider>

    </users.Provider>
    </div>
  )
}

export default App;
