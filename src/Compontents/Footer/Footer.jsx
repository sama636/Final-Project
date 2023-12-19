import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="row  footer ">
        <div className="col-md-3">
        <h3 className="color pb-5">Brokery Finder</h3>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
          et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit
          sollicitudin purus, quis rutrum mi accumsan nec.
        </h6>
        </div>
        <div className="col-md-3">
            <h4 className="color pb-4">Discover</h4>
            <p>Cairo</p>
            <p>Giza</p>
            <p>Qina</p>
            <p>Alexandria</p>
        </div>
        <div className="col-md-3">
            <h4 className="color pb-4">Lifestyle</h4>
            <p>ِApartments</p>
            <p>Villas</p>
            <p>Single Family Home</p>
            <p>Loft</p>
        </div>
        <div className="col-md-3">
            <h4 className="color pb-4">Help</h4>
            <p>Search</p>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
        </div>
        <div className="row">
        <h4 className="paara">© Brokery Finder - All rights reserved</h4>
        </div>
      </div>
    </>
  );
}
