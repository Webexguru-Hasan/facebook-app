import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddQuiz from './Components/AddQuiz/AddQuiz';
import PlayQuiz from './Components/Quiz/PlayQuiz';
import QuizDetails from './Components/Quiz/QuizDetails';
import Header from './Components/Shared/Header/Header';
import Login from './Components/User/Login';
import Registration from './Components/User/Registration';
import Quizzes from './Pages/Quizzes';


function App() {
 
const sessionUser = JSON.parse(sessionStorage.getItem('user'))  
  const [loggedInuser, setLoggedinUser] = useState(false)

  useEffect(() => {
    if(sessionUser){
      setLoggedinUser(true)
    }

  }, [sessionUser])
  
  return (
    <>
  <BrowserRouter>
  <Header loggedIn={loggedInuser} />
  <Routes>
    <Route path='/' element={<Quizzes />} />
    <Route path='quiz/:id' element={<QuizDetails />} />
    <Route path="/play/quiz" element={<PlayQuiz />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Registration />} />
    <Route path='/add' element={<AddQuiz />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
