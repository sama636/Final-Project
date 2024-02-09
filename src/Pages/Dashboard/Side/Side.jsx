import React from "react";
import "./Side.scss";
import LogOutButton from "../../../Compontents/LogOutButton/LogOutButton"
import CheckOut from "../../../Compontents/CheckOut/CheckOut"
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
          <Link to={"/checkOut"} className="">
                   <button className='button__Log mt-4 px-4'>Checkout</button>
          </Link>
          
          {/* <Link className="p-3">
            <LogOutButton/>
          </Link> */}
          
        </div>
      </div>
    </>
  );
}
