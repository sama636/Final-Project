import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'

export default function Login() {  
  return (
    <div className='log'>
        <Link to={"/Log"}>Log In</Link>    
    </div>
  )
}