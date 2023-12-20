import React from "react";
import "../AboutUs/About.scss";
import StoryAbout from "../../Compontents/StoryAbout/StoryAbout";
import Value from "../../Compontents/Value/Value";
import Services from "../../Compontents/Services/Services";
import Hello from "../../Compontents/Hello/Hello";
export default function About() {
  return (
    <div>
      <div className='paraAbout '>
        <div className='about'>
        <p>About Us</p>
        <h1 className='p-2'>Welcome to Brokery Finder​</h1>
        </div>
      </div>
      <StoryAbout />
      <Hello />
      <Value />
      <Services />
    </div>
  );
}
