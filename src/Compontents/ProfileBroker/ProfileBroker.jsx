import React from "react";
import broker from "../../assets/broker.jpg";
import { IoStarSharp } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";

export default function ProfileBroker() {
  return (
    <>
      <div className="container p-5">
        <div className="row pt-3">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <img src={broker} className="size_image rounded" />
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 p-4">
            <h3>Nour Ahmed</h3>
            <div className="d-flex justify-content-center p-2 gap-1">
              <p className="color_para fs-5">3</p>
              <div className="stars fs-5">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <RiStarSLine />
                <RiStarSLine />
              </div>
            </div>
            <div className="company">
              <p>
                Company Agent at{" "}
                <a href="#" className="company_color">
                Smart Houses Inc.
                </a>
              </p>
            </div>
            <div className="d-flex  justify-content-center">
              <span className="span">Tax Number:</span>
              <a className="color_para" href="https://wa.me/2001002454261">
              01002454261
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <span className="span">Agent License:</span>
              <p className="color_para">090-0348-8346</p>
            </div>
            <div className="d-flex justify-content-center">
              <span className="span">Service Areas:</span>
              <p className="color_para">6 October, El Shaikh Zayed , El Ahram, Hdaiek October, Lowell</p>
            </div>
                  <p className="color_par">Property Management, Consulting, Buyer's Agent, Listing Agent, Relocation</p>
            </div>
          </div>
      </div>
    </>
  );
}
