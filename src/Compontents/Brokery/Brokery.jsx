import React from "react";

export default function Brokery(brokers) {
  return (
    <div>
      <div className="cardA">
        <img src={brokers.thumbnail} className="card-img-top"  />
        <div className="card-body">
          <h5 className="card-title">{brokers.title}</h5>
          <p className="card-text">
          {brokers.Governorate}
          </p>
          
        </div>
      </div>
    </div>
  );
}


