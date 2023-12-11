import React from 'react'
import "./Sec.scss"
import home from "../../assets/home.jpg";
export default function Sec() {
  return (
    <div>
      <img className='home' src={home}/>
      <div className='card col-3'>
        <h1>Discover Our Finest Selection</h1>
        <p>CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUTAS LISTS OR GRIDS, FULL-WIDTH OR BOXED ​</p>
        <button type="button" class="btn btn-outline-light">Discover</button>
      </div>
    </div>
  )
}
