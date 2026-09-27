import { useState } from 'react'

import './App.css'
import UserLayout from "./pages/UserLayout"
import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ItemStore from './components/ItemStore'
import Stopwatch from './components/Stopwatch'
import Login from './components/Login'

const App = () => {



  return (
    <div className = "index">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
        <Route index element = {<ItemStore/>}/>
        <Route path="/mycart" element={<h1>Cart</h1>}/>
        <Route path="/myorders" element={<h1>Orders</h1>}/>
        <Route path="/settings" element={<h1>Settings</h1>}/>
        <Route path="/myprofile" element={<h1>Profile</h1>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path = "/stopwatch" element = {<Stopwatch/>}/>
        <Route path = "*" element = {<h1>Error: Page not found</h1>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

