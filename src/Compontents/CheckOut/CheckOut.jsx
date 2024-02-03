import React from "react";
import "./CheckOut.scss";

export default function CheckOut() {
  return (
    <>
      <div className="col-md-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="50%">Name</th>
              <th>Price</th>
              <th>Qty Month</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sama</td>
              <td>200</td>
              <td>2</td>
              <td>400</td>
            </tr>
            <tr>
              <td>sama</td>
              <td>200</td>
              <td>2</td>
              <td>400</td>
            </tr>
            <tr>
              <td>sama</td>
              <td>200</td>
              <td>2</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
