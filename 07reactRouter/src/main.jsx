/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import about from './components/About/About.jsx'
import Home from './components/Home/home.jsx'

const router = createBrowserRouter([{
  path : '/',
  element : <Layout/>,
  children : [
    {
      path: "",
      element: <home/>

    }, 
    {
      path: "about",
      element: <about/>
    },
    
  ] 
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
