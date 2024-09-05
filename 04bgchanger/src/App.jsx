import {useState} from "react"
function App() {
  const [color , setColor ] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className ="fixed flex flex-wrap justify-center bottom-12">
          <div className = "flex flex-wrap justify-center gap-3 shadow-lg "></div>
        </div>

    </div>
    
    
  )
}

export default App
