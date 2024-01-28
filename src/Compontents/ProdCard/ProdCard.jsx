import React from "react";
import "./ProdCard.scss";
import { FaWhatsapp } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { GiThermometerScale } from "react-icons/gi";

export default function ProdCard(product) {
  return (
    <>
      <div className="container col-10">
        <div class="carditem col-12 border rounded-2">
          <div className="row">
            <div className="col-3">
              <img
                className="card-img-top rounded-1 w-100vh h-100"
                src={product.product.thumbnail}
                alt="Card image cap"
              />{" "}
            </div>
            <div className="col-9 p-4">
              <div className="card-body">
                <h3 className="card-text ">{product.product.category}</h3>
                <h5 className="card-titlee   mt-3">
                  {product.product.price} EGP
                </h5>
                <p className="card-text">{product.product.description}</p>
                <div className="Icons d-flex justify-content-center gap-4">
                  <p className="d-flex gap-2">
                    <IoBedOutline />
                    {product.product.rooms}
                  </p>
                  <p className="d-flex gap-2">
                    <FaShower />
                    {product.product.bathroom}
                  </p>
                  <p className="d-flex gap-2">
                    <GiThermometerScale />
                    {product.product.meter}
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
                >
                  Chat
                </button>
              </div>
            </div>
            {/* <div className="d-flex gap-3 justify-content-center p-2 buttons">
              <div className="d-flex align-items-center justify-content-center bg-success w-100 rounded-2 text-white gap-2 py-0">
                <FaWhatsapp />
                WhatsApp
              </div>
              <span className="bg-danger text-white fs-3 px-2 rounded-2">
                {" "}
                <CiHeart />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
