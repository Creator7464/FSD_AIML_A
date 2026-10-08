import React from 'react'

const Items = ({props}) => {
  return (
    <div className = "card">
      <img src = {props.images[0]} height = "100px" alt = "image"/>
      <div className = "title">
        <h3 >{props.title}</h3>
      </div>
      <div className = "price">
        <h3>Price: {props.price}</h3>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Items;
