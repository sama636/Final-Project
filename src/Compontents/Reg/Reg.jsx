import React from "react";
import "./Reg.scss";
import registerSchema from "../../schemas/registerSchema";
import HelloLog from "../../assets/HelloLog.jpeg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Reg() {
  const navigate = useNavigate("");
  function RegisterAccount(data) {
    delete data.confirmpassword;
    console.log(data);
    axios.post("http://localhost:3004/users", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/Log");
  }
  return (
    <>
      <div className="container pt-5 my-4">
        <div className="row  g-4 flex-column align-content-center flex-md-row align-items-stretch">
          <div className="col-10 col-md-6">
            <div className="h-100">
              <img className="con rounded-2 h-100" src={HelloLog} />
            </div>
          </div>
          <div className="col-10 col-md-6">
            <Formik
              initialValues={{
                email: "",
                name: "",
                role: "Member",
                confirmpassword: "",
                password: "",
              }}
              validationSchema={registerSchema}
              onSubmit={(values) => {
                console.log(values);
                RegisterAccount(values);
              }}
            >
              <Form className="user__form h-100">
                <div className="d-flex col-12 flex-column gap-2 ">
                  <label htmlFor="">Full Name:</label>
                  <Field
                    className="inp"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <span className="text-danger">
                  <ErrorMessage name="name" />
                </span>
                <div className="d-flex col-12 flex-column gap-2 ">
                  <label htmlFor="">Email:</label>
                  <Field
                    className="inp"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <span className="text-danger">
                  <ErrorMessage name="email" />
                </span>
                <div className="d-flex col-12 flex-column gap-2 ">
                  <label htmlFor="">Password:</label>
                  <Field
                    className="inp"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <span className="text-danger">
                  <ErrorMessage name="password" />
                </span>
                <div className="d-flex col-12 flex-column gap-2">
                  <label htmlFor="">Confirm Password:</label>
                  <Field
                    className="inp"
                    name="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <span className="text-danger">
                  <ErrorMessage name="confirmpassword" />
                </span>
                <div className="d-flex justify-content-end">
                  <input type="submit" />
                </div>
              </Form>
            </Formik>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
