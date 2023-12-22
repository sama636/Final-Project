import React from "react";
import "./Side.scss";
import Villas from "../../Villas/Villas";
import Apsrtments from "../../Apartments/Apartments";
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
            <span className="fs-5">Apartments</span>
            {/* <Link  to={<Apsrtments/>}>Apartments</Link> */}
          </Link>
          <a className="list-group-item list-group-item-action  py-2">
            <span className="fs-5">Villas</span>
            {/* <Link to={<Villas/>}>Villas</Link> */}
          </a>
          <Link
            to={"/Dashboard/users"}
            className="list-group-item list-group-item-action  py-2"
          >
            <span className="fs-5">Users</span>
          </Link>
        </div>
      </div>
    </>
  );
}
