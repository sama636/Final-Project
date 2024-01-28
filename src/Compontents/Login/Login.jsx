import React from 'react'
import "./Login.scss"
// import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { $Modal_Index } from '../../store'

export default function Login() {
  // const [modalIndex ,setModalIndex] = useRecoilState($Modal_Index);
  
  return (
    <div className='log'>
      {/* <button className='btn' onClick={() =>{
        setModalIndex(true)
      }}>Log In</button>  */}
        <Link to={"/Log"}>Log In</Link>
      {/* { modalIndex == true ? <Modal /> : null} */}
    
    </div>
  )
}