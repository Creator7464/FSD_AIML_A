import React from 'react'
import Items from './Items'
import { useState,useEffect,useContext } from 'react'
import usercart from './UserCart';

let items = [];

const ItemStore = () => {

  const [count, setcount] = useState(0);
  const {ucart:cart} = useContext(usercart);
  async function retrieve()
    {
      try
      {
        const resp = await fetch("https://dummyjson.com/product");
        const data = await resp.json();
        items = data.products;
        setcount((pt) => pt + 1);
      }
      catch(err)
      {
        Navigate("/Error")
      }
        
    }

  useEffect(() =>
  {
    retrieve();
  },[]);
  useEffect(() =>
  {
    console.log(cart)
  },[cart]);

 

  return (
    <div className = "home">
      {
        
        items.map((i, index) => {return <Items key = {index+1} cardid = {i.id} props = {i}/>})
        
      }
     
    </div>
  )
}

export default ItemStore;

