import React from "react";
import "./Services.scss";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegLifeRing } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaRadio } from "react-icons/fa6";
import { PiHandshakeBold } from "react-icons/pi";
import { PiGoogleChromeLogo } from "react-icons/pi";
import { MdBalance } from "react-icons/md";



export default function Services() {
  return (
    <>
     <div className="Services">
        <h1>Our Services</h1>
      </div>
      <div className="serv">
      <div className="One">
      <div className="row p-3">
        <div className="col-3 ">
        <div className="icon"><FaPeopleGroup/></div>
          <p className="tit">Property Management</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </p>
        </div>
        <div className="col-3 ">
        <div className="icon"><PiGoogleChromeLogo/></div>
          <p className="tit">Capital Improvements</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </p>
        </div>
        <div className="col-3 ">
        <div className="icon"><VscGraph/></div>
          <p className="tit">Financial Reporting</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </p>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-3 ">
        <div className="icon"><PiHandshakeBold/></div>
          <p className="tit">Business Development</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </p>
        </div>
        <div className="col-3">
        <div className="icon"><FaRadio/></div>
          <p className="tit">Finance Real Estate</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </p>
        </div>
        <div className="col-3 ">
        <div className="icon"><MdBalance/></div>
          <p className="tit">Recover Asset Value</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
