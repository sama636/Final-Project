import React from 'react'
import "./Sign.scss"
import { Link } from 'react-router-dom'

export default function Sign() {
  return (
<>
    <div className='log'>
      <Link to={"/Reg"}>
      Sign Up 
      </Link>
    </div>
    </>
  )
}
