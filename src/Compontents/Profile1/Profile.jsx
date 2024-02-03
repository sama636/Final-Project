import React from "react";
import "./Profile.scss";
import agent from "../../assets/agent1.jpg";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";

export default function Profile() {
  return (
    <>
      <div className="container p-5">
        <div className="row pt-3">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <img className="size_image rounded" src={agent} />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 p-4">
            <h3>Mohamed Ali</h3>
            <div className="d-flex justify-content-center p-2 gap-1">
              <p className="color_para fs-5">4</p>
              <div className="stars fs-5">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <RiStarSLine />
              </div>
            </div>
            <div className="company">
              <p>
                Company Agent at{" "}
                <a href="#" className="company_color">
                  Realty Properties Inc.
                </a>
              </p>
            </div>
            <div className="d-flex  justify-content-center">
              <span className="span">Tax Number:</span>
              <a className="color_para" href="https://wa.me/2001222786841">
                01222786841
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <span className="span">Agent License:</span>
              <p className="color_para">090-0348-8346</p>
            </div>
            <div className="d-flex justify-content-center">
              <span className="span">Service Areas:</span>
              <p className="color_para">Nasr City, City New Cairo, El Mokatam, Madinty, El Maadi</p>
            </div>
                  <p className="color_par">Property Management, Consulting, Buyer's Agent, Listing Agent, Relocation</p>
            </div>
          </div>
      </div>
    </>
  );
}
