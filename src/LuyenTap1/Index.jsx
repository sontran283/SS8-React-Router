// import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Index() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}
