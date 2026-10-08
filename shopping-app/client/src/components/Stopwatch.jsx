import React from 'react'
import {useState, useEffect} from 'react'
import "../stopwatch.css"
const Stopwatch = () => {
    const [timer,settimer ] = useState(0);
    const[running, setrunning] = useState(0);
    useEffect(
        () =>
        {
            let time;
            if (running)
            {
                time = setInterval(() => 
                {
                    settimer((pt) => pt+10);
                },10)
            }
            return ()=> clearInterval(time);

        },[running]
    )
    function Reset()
    {
        setrunning(0);
        settimer(0);

    }
  return (
    <div className = "stopwatch">
        
        <h1>{Math.trunc(timer/60000)}:{(Math.trunc(timer/1000))%60}:{(timer%1000)/10}</h1>
        <button onClick = {() => 
            {
                setrunning(running^1);
            }
        }>{running?"Stop":"Start"}</button>
        <button onClick = {Reset}>Reset</button>

    </div>
  )
}

export default Stopwatch
