import React from 'react'
import Items from './Items'
import { useState,useEffect } from 'react'
let items = [
  {images: [null], title: "React", price: "₹ 347"},
   {images: [null], title: "Java", price: "₹ 457"},
    {images: [null], title: "Python", price: "₹ 450"},
     {images: [null], title: "C++", price: "₹ 880"},
     {images: [null], title: "Node js", price: "₹ 789"}
];

const ItemStore = () => {

  const [count, setcount] = useState(0);

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

  return (
    <div className = "home">
      {

        items.map((i, index) => {return <Items key = {index} props = {i}/>})
      }
    </div>
  )
}

export default ItemStore;
