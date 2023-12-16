import React from "react";
import "./Side.scss";
import { BsList } from "react-icons/bs";

export default function Side() {
  return (
    <div className="bg-white p-2 col-3">
      <div className="my-2">
        {/* <BsList className="my-2 m-3 icon_dash" /> */}
        <span className="brand-name fs-4">Dashboard</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item list-group-item-action  py-2">
          <span className="fs-5">Apartments</span>
        </a>
        <a className="list-group-item list-group-item-action  py-2">
          <span className="fs-5">Villas</span>
        </a>
        <a className="list-group-item list-group-item-action  py-2">
          <span className="fs-5">Users</span>
        </a>
      </div>
    </div>
  );
}
