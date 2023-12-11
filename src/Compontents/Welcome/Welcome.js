import React from 'react'
import "./Welcome.scss"
import welcome from "../../assets/welcome.jpg"
export default function Welcome() {
  return (
    <div >
      <img src={welcome} className='image'/>
    </div>
  )
}
