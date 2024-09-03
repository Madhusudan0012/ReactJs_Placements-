
// eslint-disable-next-line no-unused-vars
import {useState} from 'react'
import './App.css'

function App() {

   let   [counter , setCounter]  = useState(50)
  
  // let counter = 15

  const addValue = () => {
    setCounter(counter+1)
    console.log("clicked" , counter);

    console.log("Value Added" , counter);
  }

  const removeValue = () =>{
    setCounter(counter-1);

    console.log("clicked" , counter);
    console.log("Value Added" , counter);

  }

  return (
    <>
     <h1> build something !! </h1>
     <h2>Counter value : {counter}</h2>

     <button onClick={addValue}> Add Value</button>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
