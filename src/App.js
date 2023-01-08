
import './App.css';
import UserContext from './projectComponent/Contexts/Usercontext';
import ThemeContext from './projectComponent/Contexts/ThemeContext';
import Layout from './projectComponent/Layout/Layout';
import Posts from './projectComponent/Posts/Posts';
import Login from './projectComponent/Users/Login/Login'
import Register from './projectComponent/Users/Register/Register';

function App() {
  
  return (
    <div>
      
      <UserContext>
        <ThemeContext>
        
          <Layout>
          <Login /><br />
          <Register />
          <Posts />
        </Layout>
      
      </ThemeContext>
      </UserContext>
        
    
      
    </div>
  )
}

export default App;
