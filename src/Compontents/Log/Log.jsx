import React from "react";
import { useRecoilState } from "recoil";
import { $Auth_Data } from "../../store";
import "./Log.scss";
import HelloLog from "../../assets/HelloLog.jpeg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import loginSchema from "../../schemas/loginSchema";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Log() {
  const [authData, setAuthData] = useRecoilState($Auth_Data);
  console.log(authData);

  function LoginAccount(data) {
    axios(
      `http://localhost:3004/users?email=${data.email}&password=${data.password}`
    ).then((data) => {
      if (data.data.length > 0) {
        localStorage.setItem("loggedInUser", JSON.stringify(data.data[0]));
        setAuthData({
          isAuth: true,
          userId: data.data[0].id,
        });
       
      }
    });
  }
  return (
    <>
      <div className="container pt-5 my-3">
        <div className="row g-4 flex-column align-content-center flex-md-row align-items-stretch">
          <div className="col-10 col-md-6">
            <div className="h-100">
              <img className="Photo rounded-1 h-100" src={HelloLog} />
            </div>
          </div>
          <div className="col-10 col-md-6">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                LoginAccount(values);
              }}
            >
              <Form className="user__form d-flex flex-column justify-content-center h-100">
                <div className="d-flex col-12 flex-column gap-2 mb-3 ">
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
                <div className="d-flex col-12 flex-column gap-2 mb-3 ">
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
                <div className="d-flex justify-content-end">
                  <input
                    type="submit"
                    onClick={() => {
                      <></>;
                    }}
                  />
                </div>
              </Form>
            </Formik>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
