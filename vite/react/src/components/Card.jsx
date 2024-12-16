import React from 'react'
import pic1 from "../image/Krishna-HD-Black-Poster-Image.jpg"
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
        <h2>{props.name}</h2>
      <img src={props.pic} alt="React Logo" />
      <h2>{props.roll}</h2>

      </div>
  )
}

export default Card