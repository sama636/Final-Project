import React from 'react'
import "./Sign.scss"
import { Link } from 'react-router-dom'
import Mod from '../Mod/Mod'
import Reg from '../Reg/Reg'
import { useRecoilState } from 'recoil'
import { $Mod_Index } from '../../store'
import { Row } from 'react-bootstrap'


export default function Sign() {
    // const [modalIndex ,setModalIndex] = useRecoilState($Mod_Index);
  return (
<>
    <div className='log'>
      {/* <button className='btn'  onClick={() =>{
        
      }}>Sign Up</button>  */}
      <Link to={"/Reg"}>
      Sign Up
      </Link>


{/* { modalIndex == true ? <Mod /> : null} */}
{/* { modalIndex == true ? <Reg /> : null} */}
    </div>
    </>
  )
}
