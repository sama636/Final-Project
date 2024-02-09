import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { GiThermometerScale } from "react-icons/gi";

export default function ProdVilla(Villa) {
  return (
    <>
    <div className="container col-10">
      <div class="carditem col-12 border rounded-2">
        <div className="row g-0 w-100">
          <div className="col-md-5 g-0 col-sm-12 d-flex justify-content-center">
            <img
              className="card-img-top rounded-1 w-100vh h-100"
              src={Villa.Villa.thumbnail}
              alt="Card image cap"
            />{" "}
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 p-4">
            <div className="card-body">
              <h3 className="card-text ">{Villa.Villa.category}</h3>
              <h5 className="card-titlee   mt-3">
                {Villa.Villa.price} EGP
              </h5>
              <p className="card-text">{Villa.Villa.description}</p>
              <div className="Icons d-flex justify-content-center gap-4">
                <p className="d-flex align-items-center gap-2">
                  <IoBedOutline />
                  {Villa.Villa.rooms}
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FaShower />
                  {Villa.Villa.bathroom}
                </p>
                <p className="d-flex align-items-center gap-2">
                  <GiThermometerScale />
                  {Villa.Villa.meter}
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center p-2 ">
              <button
                type="button"
                class="btnCall rounded-2 text-white  px-4 py-2"
              >
                Call
              </button>
              <button
                  type="button"
                  class="btnCall rounded-2 text-white px-4 py-2"
                ><a className="text-white" target="blank" href="https://wa.me/2001222786841">
                  Chat
                  </a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
      );
}
