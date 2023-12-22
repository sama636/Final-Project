import React from "react";
import "./ProdCard.scss"

export default function ProdCard(product) {
  return (
    <div className="carditem h-100" styles="width: 18rem;">
      <img className="card-img-top w-100 rounded-2" src={product.product.thumbnail} alt="Card image cap" />
      <div className="card-body">
      <h2 className="card-text pt-3">
          {product.product.category}
        </h2> 
        <h5 className="card-titlee fs-3 pb-2 mt-3">{product.product.price} EGP</h5>
        <p className="card-text fs-4">
          {product.product.description}
        </p>
      </div>
    </div>
  );
}
