import React from 'react'
import { useState,useEffect,useContext } from 'react';
import usercart from './UserCart';

const Items = ({key, props}) => {
  const [quant, setquant] = useState(0);
  const {ucart:cart, setcart} = useContext(usercart);
  
  function update(event)
  {
    let prodno = event.currentTarget.id;
    if (event.target.id === "increase")
    {
      if (prodno in cart)
      {
        const obj = {prodno: {...(c.prodno),quantity: c.prodno.quantity + 1}};
        setcart((c) => ({...c, obj}));

      }
      // else
      // {
      //   setcart((c) => ({...c, {}}))
      // }

    }
  }

  return (
    <div className = "card" id = {key} onClick = {(e) => update(e)}>
      <img src = {props.images[0]} height = "100px" alt = "image"/>
      <div className = "title">
        <h3 >{props.title}</h3>
      </div>
      <div className = "price">
        <h3>Price: {props.price}</h3>
      </div>
      <div className = "cardbtn">
        {quant != 0? <button onClick = {() => setquant((v) => v - 1)} id = "decrease"><h4>-</h4></button>:""}
        {quant == 0?<h5>Add to cart</h5>:<h4>{quant}</h4>}

        <button onClick = {() => setquant((v) => v + 1)} id = "increase"><h4>+</h4></button>
        </div>
      
    </div>
  )
}

export default Items;
