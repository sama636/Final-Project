import React from 'react'
import "./Featured.scss"
import Fea1 from "../../assets/Fea1.jpg"
import Villa from "../../assets/Villa.jpg"
import Feau from "../../assets/Feau.jpg"

export default function Featured() {
  return (
    <>
    <div className='Featured p-5'>
        <div className='row Title__Featured'>
            <h4 className='p-5 fs-1'>Featured Homes</h4>
        </div>
        <div className='row CARDS'>
            <div className='col-3 card2'>
                <img src={Fea1} className='fea'/>
                <p className='fs-3 p-2'>Apartments for sale</p>
            </div>
            <div className='col-3 card2'>
                <img src={Feau} className='fea'/>
                <p className='fs-3 p-2'>Single family homes</p>
            </div>
            <div className='col-3 card2'>
                <img src={Villa} className='fea'/>
                <p className='fs-3 p-2'>Villas for sale</p>
            </div>
        </div>
    </div>
      
    </>
  )
}
