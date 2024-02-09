import React, { useState } from "react";
import "./CheckOut.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CheckSchema from "../../schemas/CheckSchema";
import { useNavigate } from "react-router";
import axios from "axios";

export default function CheckOut() {
  const navigate = useNavigate("");

  function check(data) {
    axios.post(" http://localhost:3004/checkout", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/dashboard");
  }
  return (
    <>
      <div className="col-12">
        <Formik
          initialValues={{
            lastname: "",
            firstname: "",
            city: "",
            state: "",
            email: "",
            phoneNumber: "",
          }}
          validationSchema={CheckSchema}
          onSubmit={(values) => {
            console.log(values);
            check(values);
          }}
        >
          <Form className="useer__form d-flex flex-column my-4 justify-content-center ">
            <div className="container">
              <div className="d-flex justify-content-center gap-2">
                <div className="d-flex col-lg-6 col-md-6 col-sm-12 flex-column gap-2 mb-2 ">
                  <label htmlFor="">First Name:</label>
                  <Field className="inp" name="firstname" type="text" />
                  <span className="text-danger">
                    <ErrorMessage name="firstname" />
                  </span>
                </div>

                <div className="d-flex col-lg-6 col-md-6 col-sm-12 flex-column gap-2 mb-2 ">
                  <label htmlFor="">Last Name:</label>
                  <Field className="inp" name="lastname" type="text" />
                  <span className="text-danger">
                    <ErrorMessage name="lastname" />
                  </span>
                </div>
              </div>

              <div className="d-flex col-md-12 flex-column gap-2 mb-2 ">
                <label htmlFor="">Phone Number:</label>
                <Field className="inp" name="phoneNumber" type="text" />
                <span className="text-danger">
                  <ErrorMessage name="phoneNumber" />
                </span>
              </div>

              <div className="d-flex col-md-12 flex-column gap-2 mb-2 ">
                <label>Email Address:</label>
                <Field className="inp" name="email" type="email" />
                <span className="text-danger">
                  <ErrorMessage name="email" />
                </span>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <div className="d-flex col-lg-6 col-md-6 col-sm-12  flex-column gap-2 mb-2 ">
                  <label>City:</label>
                  <Field className="inp" name="city" type="text" />
                  <span className="text-danger">
                    <ErrorMessage name="city" />
                  </span>
                </div>

                <div className="d-flex col-lg-6 col-md-6 col-sm-12  flex-column gap-2 mb-2">
                  <label>State:</label>
                  <Field className="inp" name="state" type="text" />
                  <span className="text-danger">
                    <ErrorMessage name="state" />
                  </span>
                </div>
              </div>
              <button className="button__Log px-4">Payment</button>
            </div>
          </Form>
        </Formik>
      </div>

      {/* <div className="col-md-5">
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
      </div> */}
    </>
  );
}
