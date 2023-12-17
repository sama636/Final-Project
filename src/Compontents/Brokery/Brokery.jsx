import React from "react";

export default function Brokery(brokers) {
  return (
    <div className="cardItem" styles="width: 18rem;">
      <img className="card-img-top" src={brokers.thumbnail} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{brokers.title}</h5>
        <p className="card-text">
          {brokers.description}
        </p>
        
      </div>
    </div>
  );
}


