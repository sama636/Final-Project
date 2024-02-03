import React from "react";
import "./Broker.scss";
import agent from "../../assets/agent1.jpg";
import Brok from "../../assets/Brok.jpg";
import Profile from "../Profile1/Profile";
import broker from "../../assets/broker.jpg";
import { Link } from "react-router-dom";

export default function Broker() {
  return (
    <>
      <div className="back">
        <div className=" title">
          <h1 className="top-title d-flex justify-content-center">
            Meet Our Agents
          </h1>
          <p className="parag pt-4 mx-4 d-flex justify-content-center">
            CHOOSE FROM DIFFERENT LISTING TEMPLATES AND LAY THEM OUTAS LISTS OR
            GRIDS, FULL-WIDTH OR BOXED ​
          </p>
        </div>
        <div className="row cards d-flex align-items-center g-2">
          <div className="col-3  card1 ">
            <img src={agent} className="brokers" />
            <p className="profilee">Mohamed Ali</p>
            <p className="brok">Broker in Cairo Governorate</p>
            <p className="par">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              imperdiet ullamcorper nisl, sed venenatis...
            </p>
            <Link to={"/profile"}>
              <span>View Profile...</span>
            </Link>
          </div>
          <div className="col-3 card1">
            <img src={Brok} className="brokers" />
            <p className="profilee">Ahmed Omar</p>
            <p className="brok">Broker in Qena Governorate</p>
            <p className="par">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              imperdiet ullamcorper nisl, sed venenatis...
            </p>
            <Link to={"/Profilbroker"}>
              <span>View Profile...</span>
            </Link>
          </div>
          <div className="col-3 card1">
            <img src={broker} className="brokers" />
            <p className="profilee">Nour Ahmed</p>
            <p className="brok">Broker in Giza Governorate</p>
            <p className="par">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              imperdiet ullamcorper nisl, sed venenatis...
            </p>
            <Link to={"/ProfileBroker"}>
              <span>View Profile...</span>
            </Link>
            {/* <a href="#" className="profile">
              View Profile...
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
