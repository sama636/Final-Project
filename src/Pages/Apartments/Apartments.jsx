import React, { useEffect, useState } from "react";
import "../Apartments/Apartments.scss";
import axios from "axios";
import ProdCard from "../../Compontents/ProdCard/ProdCard";

export default function Apsrtments() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    axios("http://localhost:3004/products").then((data) => setProd(data.data));
  }, []);
  return (
    <>
      <div className="apar col-3 w-100 d-flex justify-content-center">
        <div className="apart">
          <p>Apartments</p>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {prod.map((product, index) => {
            return (
              <div key={index} className="Apart col-12 col-sm-6 col-md-4 my-3">
                <ProdCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
