import React from 'react'
import { useState,useEffect,useContext } from 'react';
import usercart from './UserCart';

let errorcode = 100;

const Adcbtn = ({setter: setquant}) => {
  return (
    <div className = "cardbtn">
      <button onClick = {() => {if (errorcode == 100) setquant((v) => v + 1)}}><h5 id = "adc">ADD TO CART</h5></button>
    </div>
  )
}



const Btn = ({change, setter: setquant}) => {
  return (
    <div className = "cardbtn">
      <button onClick = {() => {if (errorcode === 100) setquant((v) => v + 1)}}><h4 id ="increase">+</h4></button>
      <h3>{change}</h3>
      <button onClick = {() => { if (errorcode === 100) setquant((v) => v - 1)}}><h4 id = "decrease">-</h4></button>
    </div>
  )
}

const Items = ({cardid:key, props}) => {
  const [quant, setquant] = useState(0);
  const {ucart:cart, setcart} = useContext(usercart);
    
  function update(event)
  {
    try
    {
      const prodno = event.currentTarget.id;

    // console.log(event.target.id);
    if (event.target.id == "increase")
    {
       
        const obj = {[prodno]: {...cart[prodno],quantity: quant  + 1}};
        const newobj = {...cart,...obj};
        // console.log(newobj);
        setcart(newobj);
    }
    else if (event.target.id == "adc")
    {
      // const {title:t,image:img, price:p} = props;
      const obj = {[prodno]: {title: props.title, image:props.image, price:props.price, quantity: 1}}
      const newobj = {...cart,...obj}
      // console.log(newobj)
      setcart(newobj)
    }
    else
    {
      if (prodno in cart && cart[prodno].quantity > 1)
      {
        const obj = {[prodno]: {...(cart[prodno]), quantity: quant - 1}};
        const newobj = {...cart, ...obj};
        // console.log(newobj);
        setcart(newobj);

      }
      else
      {
        const {[prodno]:p, ...obj} = cart;
        // console.log(obj);
        setcart(obj);
      }
    }
    errorcode = 100;
  }
  catch(e)
  {
      console.log(e);
      errorcode = 101;
  }
  // finally
  // {
  //   console.log(errorcode);
  // }
  }

  return (
    <div className = "card" id = {key} onClickCapture = {update}>
      <img src = {props.images[0]} height = "100px" alt = "image"/>
      <div className = "title">
        <h3 >{props.title}</h3>
      </div>
      <div className = "price">
        <h3>Price: {props.price}</h3>
      </div>
      {
        (quant == 0)?<Adcbtn setter = {setquant}/>:<Btn change = {quant} setter = {setquant}/>
      }
      
    </div>
  )
}

export default Items;
