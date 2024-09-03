import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp from './App.jsx'
import './index.css'


function MyApp(){
  return (
    <div>
      <h1>Custom React!</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>

)
const reactElement 