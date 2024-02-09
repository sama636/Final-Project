import React, { useState } from "react";
import "./header.scss";
import SideMenu from "../SideMenu/SideMenu";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import plogo from "../../assets/plogo.jpeg";
import { FaBars } from "react-icons/fa";
import { $Auth_Data, $Current_Width, $Side_Menu_Index } from "../../store";
import Login from "../Login/Login";
import Sign from "../Sign/Sign";
import LogOutButton from "../LogOutButton/LogOutButton";

export default function Header() {
  const [authData] = useRecoilState($Auth_Data);
  const headerLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/apar", name: "Apartments" },
    { path: "/villa", name: "Villas" },
    { path: "/agent", name: "Our Agents" },
    { path: "/contact", name: "Contact" },
  ];
  const headerLinK= [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/apar", name: "Apartments" },
    { path: "/villa", name: "Villas" },
    { path: "/agent", name: "Our Agents" },
    { path: "/contact", name: "Contact" },
    { path: "/Dashboard", name: "Dashboard" },
  ];
  const [sideMenuIndex, setSideMenuIndex] = useRecoilState($Side_Menu_Index);
  const [Current_Width] = useRecoilState($Current_Width);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const loginData = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(loginData);
  
  return (
    <>
    {loginData && loginData.role === "Member" ? (
      <>
      <header className="col-12" id="MainHeader">
      {Current_Width <= 767 && sideMenuIndex == true ? <SideMenu /> : null}
      <img className="appLogo" src={plogo} />
      {Current_Width <= 767 ? (
        <FaBars
          className="icon"
          onClick={(e) => {
            e.stopPropagation();
            sideMenuIndex == true
              ? setSideMenuIndex(false)
              : setSideMenuIndex(true);
          }}
        />
      ) : (
        <nav>
          {headerLinks.map((link, index) => {
            return (
              <Link
                onClick={() => {
                  setCurrentIndex(index);
                }}
                key={index}
                to={link.path}
                className={CurrentIndex == index ? "activeLink" : null}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    <span className="d-none d-md-block">{authData.isAuth ? (
        <LogOutButton />
      ) : (
        <div className="loog">
          <Login />
          <Sign />
        </div>
      )}</span>
    </header>
    </>
    ) : (
      <>
      <header className="col-12" id="MainHeader">
      {Current_Width <= 767 && sideMenuIndex == true ? <SideMenu /> : null}
      <img className="appLogo" src={plogo} />
      {Current_Width <= 767 ? (
        <FaBars
          className="icon"
          onClick={(e) => {
            e.stopPropagation();
            sideMenuIndex == true
              ? setSideMenuIndex(false)
              : setSideMenuIndex(true);
          }}
        />
      ) : (
        <nav>
          {headerLinK.map((link, index) => {
            return (
              <Link
                onClick={() => {
                  setCurrentIndex(index);
                }}
                key={index}
                to={link.path}
                className={CurrentIndex == index ? "activeLink" : null}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    <span className="d-none d-md-block">{authData.isAuth ? (
        <LogOutButton />
      ) : (
        <div className="loog">
          <Login />
          <Sign />
        </div>
      )}</span>
    </header>
    </>
    )}
    
    </>
  );
}
