import React from "react";
import { useRecoilState } from "recoil";
import { $Mod_Index } from "../../store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import registerSchema from "../../schemas/registerSchema";
import axios from "axios";

export default function Modal() {
  function RegisterAccount(data) {
    delete data.confirmpassword;
    console.log(data);
    axios.post('http://localhost:3004/users', data,{
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }
  
  const [modalIndex, setModalIndex] = useRecoilState($Mod_Index);
  
  return (
    <div
      className="col-12 "
      id="modal"
      onClick={() => {
        setModalIndex(false);
      }}
    >
      <div
        className="content col-6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Formik
          initialValues={{
            email: "",
            name: "",
            confirmpassword: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            RegisterAccount(values);
          }}
        >
          <Form className="user__form my-5">
            <div className="d-flex col-12 flex-column gap-2 mb-3 ">
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
            <div className="d-flex col-12 flex-column gap-2 mb-3 ">
              <label htmlFor="">Confirm Password:</label>
              <Field
                className="inp"
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <span className="text-danger">
              <ErrorMessage name="confirmpassword " />
            </span>
            <div className="d-flex justify-content-end">
              
              <button type="button" onclick="show()">SignUp</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

