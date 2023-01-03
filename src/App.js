
import { useState } from 'react';
import { createContext } from 'react';
import './App.css';
import Layout from './projectComponent/Layout/Layout';
import Posts from './projectComponent/Posts/Posts';




 export const users = createContext()


function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const userInfo = {
    loggedIn : loggedIn,
    setLoggedIn : setLoggedIn
  }
  
  return (
    <users.Provider value={userInfo}>
      
    <Layout>
      <Posts />
    </Layout>

    </users.Provider>
  )
}

export default App;
