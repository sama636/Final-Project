import React from "react";
import "./ProdCard.scss";
import { FaWhatsapp } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

export default function ProdCard(product) {
  return (
    <div className="carditem border rounded-2 h-100" styles="width: 18rem;">
      <img
        className="card-img-top w-100 rounded-1"
        src={product.product.thumbnail}
        alt="Card image cap"
      />
      <div className="card-body">
        <h2 className="card-text pt-3">{product.product.category}</h2>
        <h5 className="card-titlee fs-3 pb-2 mt-3">
          {product.product.price} EGP
        </h5>
        <p className="card-text fs-4 p-2">{product.product.description}</p>
        <div className="d-flex gap-3 justify-content-center p-2 buttons">
          <div className="d-flex align-items-center justify-content-center bg-success w-100 rounded-2 text-white gap-2 py-0">
            <FaWhatsapp />
            WhatsApp
          </div>
          <span className="bg-danger text-white fs-3 px-2 rounded-2">
            {" "}
            <CiHeart />
          </span>
        </div>
      </div>
    </div>
  );
}
