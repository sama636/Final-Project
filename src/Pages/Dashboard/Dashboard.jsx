import React, { useState } from "react";
import "./Dashboard.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Outlet } from "react-router";
import Side from "./Side/Side";
import { useNavigate } from "react-router";

export default function HomeDash() {
  const [space, setSpace] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [url, setUrl] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate("");
  const addNewProduct = async (obj) => {
    const docRef = await addDoc(collection(db, "products"), obj);
  };
  const loginData = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(loginData);

  return (
    <>
      {loginData && loginData.role === "Admin" ? (
        <>
          <Side />
          <div className="col-9">
            <form className="Form">
              <h2 className="text-start">Add new product</h2>
              <div className=" align-items-center col-10 gap-5">
                    <div className="w-100">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label pt-2 d-block"
                  >
                    Product category :
                    
                  </label>
                  <select className="col-12 p-2 d-flex justify-content-center" onChange={(e) => {
                      setCategory(e.target.value);
                    }}>
                      <option>Choose Category</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                    </select>
                </div>
              </div>
              <div className="row">
              <div className=" align-items-center col-5 gap-5">
              <div className="w-100">
                  <div>
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-left pt-2 d-block"
                    >
                      Product Price :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Product Price"
                      onKeyUp={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className=" align-items-center col-5 gap-5">
                <div className="w-100">
                  <div>
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label pt-2 d-block"
                    >
                      Product description :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Product description "
                      onKeyUp={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="row">
              <div className=" col-5">
                <div>
                  <div>
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label pt-2 d-block"
                    >
                      Product thumbnail :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Product thumbnail"
                      onKeyUp={(e) => {
                        setUrl(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className=" col-5">
                <div>
                  <div>
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label pt-2 d-block"
                    >
                      Product Space :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Product space"
                      onKeyUp={(e) => {
                        setSpace(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="row col-10  mb-1 p-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => {
                    let obj = {
                      space: space,
                      price: price,
                      url: url,
                      category: category,
                      description: description
                    };
                    e.preventDefault();
                    addNewProduct(obj);
                    navigate("/villa")
                  }}
                  
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="flex align-items-center justify-content-center notAdmin">
          <span className="text-dark fs-3 text-bold">العب بعيد يا حرامي </span>
        </div>
      )}
      <Outlet />
    </>
  );
}
