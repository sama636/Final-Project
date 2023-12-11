import React from 'react'
import "../AboutUs/About.scss"
import abou from '../../assets/abou.jpg'
import StoryAbout from '../../Compontents/StoryAbout/StoryAbout'
import Value from '../../Compontents/Value/Value'
import Services from '../../Compontents/Services/Services';
import Hello from '../../Compontents/Hello/Hello'
export default function About() {
  return (
    <div>
      <img className='about' src={abou}/>
        {/* <h3 className='about__us'>About Us</h3> */}
        <StoryAbout/>
        <Hello/>
        <Value/>
        <Services/>
    </div>
  )
}
