import React from "react";
import "./Brokery.scss"

export default function Brokery(brokers) {
  return (
    <>
    <div className="row border-bottom cardItem" styles="width: 18rem;">
      <div className="col-4 pb-5 pt-5">
      <img className="card-img-top" src={brokers.brokers.thumbnail} alt="Card image cap" />
      </div>
      <div className="col-8 pb-5 pt-5 card-body">
      <h2 className="card-titlea p-2">{brokers.brokers.Name}</h2>
        <h5 className="card-title p-2">{brokers.brokers.Governorate}</h5>
        <a className="card-titlee p-2">{brokers.brokers.Mobile}</a>
        <p className="card-title p-2">
          {brokers.brokers.title}
        </p>
      </div>
    </div>
    </>
  );
}


