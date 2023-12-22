import React, { useState } from "react";
import "./Dashboard.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Outlet } from "react-router";
import Side from "./Side/Side";

export default function HomeDash() {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [url, setUrl] = useState();
  const addNewProduct = async (obj) => {
    const docRef = await addDoc(collection(db, "products"), obj);
    console.log(obj);
    console.log("Document written with ID: ", docRef.id);
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
              <div className=" align-items-center col-6 gap-5">
                <div className="w-100">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label pt-2 d-block"
                  >
                    Product Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Product Name"
                    onKeyUp={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
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
              <div className=" align-items-center col-6 gap-5">
                <div className="w-100">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label pt-2 d-block"
                  >
                    Product category :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Product category"
                    onKeyUp={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                </div>
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
                    />
                  </div>
                </div>
              </div>
              <div className=" col-6">
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
              <div className="row col-6 mb-1 p-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => {
                    let obj = {
                      name: name,
                      price: price,
                      url: url,
                      category: category,
                    };
                    e.preventDefault();
                    addNewProduct(obj);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="productsTable mb-5">
              <h2 className="text-start p-2">Products Table</h2>
              <table className="table table-bordered table-striped table-hover rounded-2">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Name</th>
                    <th>Product Name</th>
                    <th>Product Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                  </tr>
                  <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                  </tr>
                  <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
