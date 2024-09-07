/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {forwardRef, useState} from 'react'
import { useCallback} from'react'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [length , setLength] = useState(8);
  // eslint-disable-next-line no-unused-vars
  const [numberAllowed , setNumberAllowed] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const[charAllowed  , setCharAllowed] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const[Password , setPassword] = useState("")

  // eslint-disable-next-line no-unused-vars
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let Str = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+= "!@#$%%^&*()_+"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
      
    }
    setPassword(pass)


  } , [length , numberAllowed, charAllowed, setPassword])

  

  return (
    <>
    <div className= 'w-full-max-w-md-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra\-'>
      test 
    </div>
    </>
  )
}

export default App
