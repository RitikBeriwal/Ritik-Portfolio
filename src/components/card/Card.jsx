import React from 'react'
import "./Card.css"
import reacticon from "../../assets/reacticon.png"


function Card({title,image}) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt="Skillsicon" />
      </div>
    </div>
  )
}

export default Card
