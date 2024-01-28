import React from "react";
import "./Brokery.scss";

export default function Brokery(brokers) {
  return (
      <div className="d-flex align-items-center justify-content-center flex-column flex-md-row m-auto py-3 rounded-3" styles="width: 18rem;">
        <div className="py-2">
          <img
            className="card-img-top w-100 rounded-2"
            src={brokers.brokers.thumbnail}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h2 className="card-titlee p-2">{brokers.brokers.Name}</h2>
          <h5 className="card-title p-2">{brokers.brokers.Governorate}</h5>
          <a  href="https://wa.me/2001222786841" className="card-titlea p-2">{brokers.brokers.Mobile}</a>
          <div className="container">
          <p className="card-title p-2">{brokers.brokers.title}</p>
          </div>
        </div>
      </div>
  );
}
