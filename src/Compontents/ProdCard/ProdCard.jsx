import React from "react";

export default function ProdCard(product) {
  return (
    <div className="carditem" styles="width: 18rem;">
      <img className="card-img-top w-100 rounded-2" src={product.product.thumbnail} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title mt-3">{product.product.title}</h5>
        <p className="card-text">
          {product.product.description}
        </p>
        
      </div>
    </div>
  );
}
