import React from "react";
import "./Side.scss";
import { Link } from "react-router-dom";

export default function Side() {
  return (
    <>
      <div className="bg-white p-2 col-3">
        <div className="my-2">
          <span className="brand-name fs-4">Dashboard</span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
          <Link to={"/Dashboard"} className="list-group-item list-group-item-action  py-2">
            <span className="fs-5">Add new product</span>
          </Link>
          <Link to={"/Dashboard"} className="list-group-item list-group-item-action  py-2">
            <span className="fs-5">Edit new product</span>
          </Link>
          <Link>
          <a className="list-group-item list-group-item-action  py-2">
            <span className="fs-5">Log Out</span>
          </a>
          </Link>
          
        </div>
      </div>
    </>
  );
}
