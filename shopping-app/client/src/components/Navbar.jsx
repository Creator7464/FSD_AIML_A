import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className = "navbar">
      <Link to = "/">Home</Link>
      <Link to ="/user/cart">Cart</Link>
      <Link to ="/user/myprofile" >Profile</Link>
      <Link to = "/user/Settings">Setting</Link>
    </div>
  )
}

export default Navbar
