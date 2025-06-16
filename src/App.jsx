import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import Input from './components/Input';
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
      <input className='myClass' onChange={e => console.log("Value:", e.target.value)}/>
      <button onClick={handleClick}>CLICK ME</button>
      <Input />
      <p>a + b = {a + b}</p>
    </>
  )
}

export default App
