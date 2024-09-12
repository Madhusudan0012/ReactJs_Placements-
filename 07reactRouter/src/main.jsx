/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/About'

const router = createBrowserRouter({
  path : '/',
  element : <Layout/>,
  children : [
    {
      path: "",
      element: <Home/>

    }, 
    {
      path: "about",
      element: <About/>
    },
    
  ] 
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider/>
  </StrictMode>,
)
