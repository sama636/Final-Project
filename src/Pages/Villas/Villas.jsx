import React, { useEffect, useState } from "react";
import "./Villas.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/index";
import Filter from "../../Compontents/Filter/Filter";

import ProdVilla from "../../Compontents/ProdVilla/ProdVilla";
import axios from "axios";

export default function Villas() {
  const [products, setProducts] = useState([]);
  const [prodVilla, setProdVilla] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  useEffect(() => {
    axios("http://localhost:3004/productVillas?" + filterQuery).then((data) =>
      setProdVilla(data.data)
    );
  }, [filterQuery]);
  console.log(products);
  const getAllProducts = async () => {
    let pros = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      let obj = doc.data();
      obj.id = doc.id;
      pros.push(obj);
    });
    setProducts(pros);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      {products.map((pro) => {
        return (
          <div key={pro.id}>
            <img src={pro.imgUrl} />
            <h1>{pro.name}</h1>
            <h1>{pro.price}$</h1>
          </div>
        );
      })}
      <div className="vill col-3 w-100 d-flex justify-content-center">
        <div className="Villa">
          <p>Villas</p>
        </div>
        
      </div>
      <div className="container my-5">
      <Filter setFilterQuery={setFilterQuery} />

        <div className="row">
          {prodVilla.map((Villa, index) => {
            return (
              <div key={index} className="villal col-12 col-sm-6 col-md-4 my-3">
                <ProdVilla Villa={Villa} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
