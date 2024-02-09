import React from 'react'
import "./Sec.scss"
// import home from "../../assets/home.jpg";
export default function Sec() {
  return (
    <div>
      {/* <img className='home' src={home}/> */}
      <div className='Card_Sec col-3 w-100 d-flex justify-content-center'>
        <div className='bg'>
        <h1 className='p-1'>Discover Our Finest Selection</h1>
        <p className='p-2 section fs-6'>CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUTAS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​</p>
        <button className="btnn">Discover</button>
        </div>
      </div>
    </div>
  )
}
