import React from 'react'

export default function PayTable() {
  return (
    <>
    <div className="row col-12">
          <Side />
          <div className="productsTable mb-5">
          <h2>Payments Table</h2>
          <table className="table table-bordered table-striped table-hover rounded-2">
            <thead>
              <tr>
                <th> Payments</th>
                <th>Paymentse</th>
                <th>Payments</th>
                <th>Payments</th>
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
