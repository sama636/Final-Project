import React, { useState } from "react";
import "./ProdCard.scss";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { GiThermometerScale } from "react-icons/gi";
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"


 import products from "../../Data/db.json"


export default function ProdCard(product) {
  return (
    <>
      <div className="container col-10">
        <div class="carditem col-12 border rounded-2">
          <div className="row g-0 w-100">
            <div className="col-md-5 g-0 col-sm-12 d-flex justify-content-center">
              <img
                className="card-img-top rounded-1  h-100"
                src={product.product.thumbnail}
                alt="Card image cap"
              />{" "}
               {/* <Swiper
              slidesPerView={2}>
                {products.map((product)=>(
                  (<SwiperSlide id="swip_Slide" key={product.id}>
                    <div className="row">
                      <div className="col-6">
                      <img
                className="card-img-top rounded-1  h-100"
                src={product.product.images}
                alt="Card image cap"
              />{" "}
                      </div>
                    </div>
                  </SwiperSlide>
                )))}
              </Swiper>  */}
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 p-4 ">
              <div className="card-body">
                <h3 className="card-text ">{product.product.category}</h3>
                <h5 className="card-titlee mt-3">
                  {product.product.price} EGP
                </h5>
                <p>{product.product.description}</p>
                <div className="Icons  d-flex  justify-content-center gap-4">
                  <p className="d-flex align-items-center gap-2">
                    <IoBedOutline />
                    {product.product.rooms}
                  </p>
                  <p className="d-flex align-items-center  gap-2">
                    <FaShower />
                    {product.product.bathroom}
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <GiThermometerScale />
                    {product.product.meter}
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3  justify-content-center p-2 ">
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
                  <a className="text-white" target="blank" href="https://wa.me/2001222786841">
                    Chat
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
