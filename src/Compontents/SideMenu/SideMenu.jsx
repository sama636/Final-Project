import React from "react";
import "./SideMenu.scss";
import { Link } from "react-router-dom";
import plogo from "../../assets/plogo.jpeg";
import LogOutButton from "../LogOutButton/LogOutButton";
export default function SideMenu() {
  return (
    <div
      className="SideMenu"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img className="Logo" src={plogo} />
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/apar">Apartments</Link>
      <Link to="/villa">Villa</Link>
      <Link to="/agent">Our Agents</Link>
      <Link to="/contact">Contact</Link>
      <LogOutButton />
    </div>
  );
}
