
import React from 'react';
import './App.css';
import ShowCount from './UseCallback_components/ShowCount/ShowCount';
import Title from './UseCallback_components/Title/Title';
import UseCallback from './UseCallback_components/UseCallback';
import Clock from './UseRef/Clock/Clock';
import ScroolImg from './UseRef/ScroolImg/ScroolImg';


import StopWatch from './UseRef/StopWatch';


function App() {

  


  return (
    <UseCallback>
      <ShowCount title='title' />
      <Title />
      <StopWatch/>
      <Clock />
      <hr />
      <ScroolImg />
      
      
      
    </UseCallback>
  )
}

export default App;
