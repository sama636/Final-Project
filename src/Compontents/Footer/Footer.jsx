import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
    
      <div className="row footer ">
        <div className="col-md-3">
        <h3 className="color py-2">Brokery Finder</h3>
        <h6 className="fonts">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
          et sem sed sollicitudin. Donec non odio neque. Aliquam hendrerit
          sollicitudin purus, quis rutrum mi accumsan nec.
        </h6>
        </div>
        <div className="col-md-3 d-flex align-items-center flex-column">
            <h4 className="color py-2">Discover</h4>
            <a href="#">Cairo</a>
            <a href="#">Giza</a>
            <a href="#">Qina</a>
            <a href="#">Alexandria</a>
        </div>
        <div className="col-md-3 d-flex align-items-center flex-column">
            <h4 className="color py-2">Lifestyle</h4>
            <a href="#">ِApartments</a>
            <a href="#">Villas</a>
            <a href="#">Single Family Home</a>
            <a href="#">Loft</a>
        </div>
        <div className="col-md-3 d-flex align-items-center flex-column">
            <h4 className="color py-2">Help</h4>
            <a href="#">Search</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
        </div>
        <div className="row ">
        <h4 className="paara pt-4">© Brokery Finder - All rights reserved</h4>
        </div>
      </div>
    </>
  );
}
