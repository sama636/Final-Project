import React, { useEffect, useState } from "react";
import "../Apartments/Apartments.scss";
import axios from "axios";
import ProdCard from "../../Compontents/ProdCard/ProdCard";
import Apartment from '../../assets/Apartment.jpg';

export default function Apsrtments() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    axios("http://localhost:3004/products").then((data) => setProd(data.data));
  }, []);
  return (
    <>
    <img className="apar" src={Apartment}/>
    <p className="apart">Welcome to Apartment</p>
    <div className="container my-5">
      <div className="row">
        {prod.map((product,index) => {
          return (
            <div key={index} className="Apart col-4 my-3">
              <ProdCard  product={product} />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
