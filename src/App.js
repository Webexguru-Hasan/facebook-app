
import React from 'react';
import './App.css';
import Button from './Button/Button';
import Useref from './UseRef/Useref';

import WellComponent from './WellComponents/WellComponent';

function App() {
  
  function handleClick(){
    console.log('handleClick')
  }
  function handleContact(){
    console.log('handleContact')
  }
  function handleLogin(){
    console.log('handleLogin');
  }
  return (
    <>
    <WellComponent tpye='button' placeholder='I am creating well component' onClick={handleClick} />
    <br/>
    <hr/>
    <Button onClick={handleClick}>
      click
    </Button>
    <Button onClick={handleContact}>
      contact
    </Button>
    <Button onClick={handleLogin}>
      login
    </Button>
    <br/>
    <hr/>
    <Useref />

    </>
  )
}

export default App;
