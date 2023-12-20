import React, { useState } from 'react'
import "./HomeDash.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../firebase';


export default function HomeDash() {
  const[name , setName] = useState();
  const[category , setCategory] = useState();
  const[price , setPrice] = useState();
  const[url , setUrl] = useState();
const addNewProduct = async(obj) =>{
  const docRef = await addDoc(collection(db, "products"), obj);
  console.log("Document written with ID: ", docRef.id);
}
  return (
    <>
      <div className="col-9">
        <form className="Form">
          <h2>Add new product</h2>
          <div className=" align-items-center col-8 gap-5">
            <div className="w-100">
              <label for="exampleInputEmail1" class="form-label pt-2 d-block">
                Product Name :
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Product Name"
                onKeyUp={(e)=>{
                  setName(e.target.value);
                }}
                
              />
            </div>
            <div className="w-100">
              <div>
                <label
                  for="exampleInputEmail1"
                  class="form-label text-left pt-2 d-block"
                >
                  Product Price :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Product Price"
                  onKeyUp={(e)=>{
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" align-items-center col-8 gap-5">
            <div className="w-100">
              <label for="exampleInputEmail1" class="form-label pt-2 d-block">
                Product category :
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Product category"
                onKeyUp={(e)=>{
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div className="w-100">
              <div>
                <label for="exampleInputEmail1" class="form-label pt-2 d-block">
                  Product description :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Product description "
                  
                />
              </div>
            </div>
          </div>
          <div className=" col-8">
            <div>
              <div>
                <label for="exampleInputEmail1" class="form-label pt-2 d-block">
                  Product thumbnail :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Product thumbnail"
                  onKeyUp={(e)=>{
                    setUrl(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row p-3">
            <button type="submit" class="btn btn-primary" onclick={(e)=>{
              let obj = {
                name : name,
                price : price,
                url : url,
                category: category,
              }
              e.preventDefault();
              addNewProduct(obj);
            }}>
              Submit
            </button>
          </div>
        </form>
        <div className="productsTable mb-5">
          <h2>Products Table</h2>
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
  );
}
