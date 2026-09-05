import React from 'react'
import Items from "./Items"

const cart = [
  {title: "React",src: "https://th.bing.com/th/id/OIP.-z0DA20cOrqiC-WaKXyvfgAAAA?w=160&h=207&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3", price: "₹ 750"},
  {title: "Node",src: " ", price: "₹ 630"},
  {title: "Python",src: "", price: "₹ 540"},
  {title: "Java",src: "", price: "₹ 700"},
  {title: "C++",src: "", price: "₹ 800"},
  {title: "Rust",src: "", price: "₹ 770"},
]
const Home = () => {
  return (
    <div className = "home">
      {
        cart.map((item, index) =>{ return <Items key = {index} props = {item}/>})
      }
    </div>
  )
}

export default Home
