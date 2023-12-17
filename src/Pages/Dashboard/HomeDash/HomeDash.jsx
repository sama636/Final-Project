import React from "react";
import "./HomeDash.scss";

export default function HomeDash() {
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
                />
              </div>
            </div>
          </div>
          <div className="row p-3">
            <button type="submit" class="btn btn-primary">
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
