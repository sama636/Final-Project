import React from 'react'
import "./Sign.scss"
import Mod from '../Mod/Mod'
import { useRecoilState } from 'recoil'
import { $Mod_Index } from '../../store'


export default function Sign() {
    const [modalIndex ,setModalIndex] = useRecoilState($Mod_Index);
  return (
    <div className='log'>
      <button className='btn'  onClick={() =>{
        setModalIndex(true)
      }}>Sign Up</button> 

{ modalIndex == true ? <Mod /> : null}
    </div>
  )
}
