import { useState } from 'react'

import './App.css'
import UserLayout from "./pages/UserLayout"
import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ItemStore from './components/ItemStore'
import Stopwatch from './components/Stopwatch'
import Login from './pages/Login'
import usercontext from './components/UserContext'
const App = () => {

  const[uname, setuname] = useState("");

  return (
    <div className = "index">
      <BrowserRouter>
      <usercontext.Provider value = {{uname, setuname}}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path = "/admin" element = {<h1>Admin</h1>}></Route>
        <Route path = "/stopwatch" element = {<Stopwatch/>}/>
        <Route path="/user" element={<UserLayout/>}>
        <Route index element = {<ItemStore/>}/>
        <Route path="/user/cart" element={<h1>Orders</h1>}/>
        <Route path="/user/settings" element={<h1>Settings</h1>}/>
        <Route path="/user/myprofile" element={<h1>Profile</h1>}/>
        </Route>
        <Route path = "*" element = {<h1>Error: Page not found</h1>}/>
       
      </Routes>
       </usercontext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App

