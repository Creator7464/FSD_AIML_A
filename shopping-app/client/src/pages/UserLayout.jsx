import React from 'react'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Home from "../components/Home"


const UserLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default UserLayout
