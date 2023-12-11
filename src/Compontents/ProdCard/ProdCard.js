import React from "react";

export default function ProdCard(product) {
  return (
    <div className="cardItem" styles="width: 18rem;">
      <img className="card-img-top" src={product.product.thumbnail} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{product.product.title}</h5>
        <p className="card-text">
          {product.product.description}
        </p>
        
      </div>
    </div>
  );
}
