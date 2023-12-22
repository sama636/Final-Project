import React, { useState } from "react";
import "./HomeDash.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Side from "../Side/Side";

export default function UsersData() {
  const loginData = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(loginData);

  return (
    <>
      <Side />
      <div className="col-9">
        <h3>Users Table</h3>
        <div className="productsTable mb-5">
          <h2 className="text-start p-2">Users Table</h2>
          <table className="table table-bordered table-striped table-hover rounded-2">
            <thead>
              <tr>
                <th>User Name</th>
                <th>User Name</th>
                <th>User Name</th>
                <th>User Name</th>
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
