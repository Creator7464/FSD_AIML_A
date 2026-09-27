import React from 'react'
import {useState, useEffect} from 'react'

const Login = () => {
    const[uname, setuname] = useState("");
    const[psswd, setpsswd] = useState("");

    function validate(e)
    {
        if (uname == "admin" || uname == "user")
        {
            console.log(`welcome ${uname}`);
        }
        else
        {
            e.preventDefault();
            alert("credentials not found");
        }
    }

  return (
    <div className = "login">
        <form onSubmit = {(event) =>validate(event)}>
            <h1>LOGIN FORM</h1>
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
            <button type = "submit">Submit</button>
            <button type = "reset">Reset</button>
        </form>
      
    </div>
  )
}

export default Login
