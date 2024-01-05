import React from 'react'
import "./Profile.scss"
import agent from "../../assets/agent1.jpg";

export default function Profile() {
  return (
    <>
    <div className='row col-2'>
    <img src={agent}/>
    </div>
    </>
  )
}
