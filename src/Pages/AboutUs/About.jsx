import React from "react";
import "../AboutUs/About.scss";
import abou from "../../assets/abou.jpg";
import StoryAbout from "../../Compontents/StoryAbout/StoryAbout";
import Value from "../../Compontents/Value/Value";
import Services from "../../Compontents/Services/Services";
import Hello from "../../Compontents/Hello/Hello";
export default function About() {
  return (
    <div>
        <img className="about" src={abou} />
      <div >
        <h1 className="aboutUs">About Us</h1>
        <p className="paraAbout">Welcome to Brokery Finder</p>
      </div>
      
      <StoryAbout />
      <Hello />
      <Value />
      <Services />
    </div>
  );
}
