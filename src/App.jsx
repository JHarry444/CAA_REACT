import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import Input from './components/Input';
import Trainer from './components/Trainer'
import ConditionalRendering from './components/ConditionalRendering'
import ExternalData from './components/ExternalData'
function App() {

  const a = 1;
  const b = 2;

  const handleClick = () => {
    alert("YO!")
  }

  return (
    <>
      <FirstComponent />
      <FirstComponent />
      <FirstComponent />
      <input className='myClass' onChange={e => console.log("Value:", e.target.value)} required/>
      <button onClick={handleClick}>CLICK ME</button>
      <Input />
      <p>a + b = {a + b}</p>
      <Trainer name="Jordan" age="efsf" specialty="Java" />
      <Trainer name="Cameron" age={33} specialty="Web" />
      <Trainer name="Shafeeq" age={40} specialty="Oracle" />
      <Trainer />
      <Trainer />
      <ConditionalRendering/>
      <ExternalData/>
    </>
  )
}

export default App
