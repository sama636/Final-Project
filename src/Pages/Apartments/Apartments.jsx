import React, { useEffect, useState } from "react";
import "../Apartments/Apartments.scss";
import axios from "axios";
import Filter from "../../Compontents/Filter/Filter";
import ProdCard from "../../Compontents/ProdCard/ProdCard";

export default function Apsrtments() {
  const [prod, setProd] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  useEffect(() => {
    axios("http://localhost:3004/products?" + filterQuery).then((data) =>
      setProd(data.data)
    );
  }, [filterQuery]);
  return (
    <>
      <div className="apar col-3 w-100 d-flex justify-content-center">
        <div className="apart">
          <p>Apartments</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3 my-5">
          <Filter setFilterQuery={setFilterQuery} />
        </div>
        <div className="col-9">
          <div className="my-5">
            <div className="row">
              {prod.map((product, index) => {
                return (
                  <div
                    key={index}
                    className=" col-12  my-3"
                  >
                    <ProdCard product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
