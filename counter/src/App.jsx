import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter = 15;

  const  addvalue = () =>{
    console.log("value added" , Math.random());


  }

  return (
    <>
    <h1> Chai - aur - react </h1>
    <h2> Counter Value {counter}</h2>


      <button onclick={addvalue}> Add value</button>
      <br/>
      <button> decrease value</button>
      </>
  )
}

export default App
