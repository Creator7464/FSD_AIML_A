import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import usercontext from '../components/UserContext';
import { useContext } from 'react';
const Login = () => {
    const {uname, setuname} = useContext(usercontext);
    const[psswd, setpsswd] = useState("");
   const navigate=useNavigate();
    

    function validate(e)
    {
        e.preventDefault();
        if (uname == "admin" && psswd == "123")
        {
            navigate("/admin");
        }else if(psswd == "1234"){
            navigate("/user");
        }
        else
        {
           navigate("/*");
        }
    }

  return (
    <div className = "login">
        
        <form onSubmit = {(event) =>validate(event)}>
            <h1>SIGN IN HERE</h1>
            <label>
                UserName
                <br />
                <input type="text" id = "uname" value = {uname} placeholder = "Enter username"
                    onChange = {(event)=> setuname(event.target.value)}/>
            </label>
            <br />
            <label >
                Password
                <br />
                <input type="password" id = "password" value = {psswd} placeholder = "Type your password"
                onChange = {(event) => setpsswd(event.target.value)}/>
            </label>
            <br />
            <button type = "submit">Sign in</button>
            <button type = "reset">Reset</button>
        </form>

    </div>
  )
}

export default Login
