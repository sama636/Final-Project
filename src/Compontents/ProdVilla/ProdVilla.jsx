import React from "react";

export default function ProdVilla(Villa) {
  return (
    <div className="carditem h-100" styles="width: 18rem;">
      <img className="card-img-top w-100 rounded-2" src={Villa.Villa.thumbnail} alt="Card image cap" />
      <div className="card-body">
      <h2 className="card-text pt-3">
          {Villa.Villa.category}
        </h2> 
        <h5 className="card-titlee fs-3 pb-2 mt-3">{Villa.Villa.price} EGP</h5>
        <p className="card-text fs-4">
          {Villa.Villa.description}
        </p>
      </div>
    </div>
  );
}
