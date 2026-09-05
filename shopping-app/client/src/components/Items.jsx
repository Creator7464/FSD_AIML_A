import React from 'react'

const Items = ({props}) => {
  return (
    <div className = "card">
      <img src = {props.src} height = "100px" alt = "image"/>
      <h2>Title: {props.title}</h2>
      <h3>Price: {props.price}</h3>
      <button>Add to Cart</button>
    </div>
  )
}

export default Items
