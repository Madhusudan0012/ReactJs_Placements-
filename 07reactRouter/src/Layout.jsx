/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </div>
  )
}

export default Layout
