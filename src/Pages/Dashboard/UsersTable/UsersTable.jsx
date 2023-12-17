import React from 'react'
import Side from "./Side/Side";

export default function UsersTable() {
  return (
    <>
    <div className="row col-12">
          <Side />
          <div className="productsTable mb-5">
          <h2>Users Table</h2>
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
  )
}
