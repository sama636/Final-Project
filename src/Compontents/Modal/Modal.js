import React from 'react'
import "./Modal.scss"
import { useRecoilState } from 'recoil'
import { $Auth_Data, $Modal_Index } from '../../store'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import loginSchema from '../../schemas/loginSchema'
import axios from 'axios'
import Sign from '../Sign/Sign'

export default function Model() {
  const[authData, setAuthData] = useRecoilState($Auth_Data)
  console.log(authData);

  function LoginAccount(data){
    axios(`http://localhost:3004/users?email=${data.email}&password=${data.password}`)
    .then((data) =>{
      if(data.data.length > 0){
        localStorage.setItem('loggedInUser', JSON.stringify(data.data[0])); 
        setAuthData({
          isAuth:true,
          userId: data.data[0].id
        })
      }
    })
  }
  const[modalIndex, setModalIndex] = useRecoilState($Modal_Index)
  return (
    <div className='col-12 ' id='modal' onClick={() =>{setModalIndex(false)}}>
        <div className='content col-6' onClick={(e) =>{
          e.stopPropagation()
        }}>
            <Formik 
            initialValues={
              {
                email: '',
              password: ''
              }}
              validationSchema={loginSchema}
              onSubmit={(values)=>{
                LoginAccount(values);
              }}
              >
              <Form className='user__form my-5'>
                <div className='d-flex col-12 flex-column gap-2 mb-3 '>
                <label htmlFor=''>Email:</label>
                <Field className="inp" name="email" type="email" placeholder="Email" />
                </div>
                <span className="text-danger">
              <ErrorMessage name='email'/>
            </span>
                <div className='d-flex col-12 flex-column gap-2 mb-3 '>
                <label htmlFor=''>Password:</label>
                <Field className="inp" name="password" type="password" placeholder="Password" />
                </div>
                <span className="text-danger">
                <ErrorMessage name='password'/>
            </span>
                <div>
                  Don’t Have and account? <Link >Create new account </Link>
                </div>
                <div className='d-flex justify-content-end'>
                <button type='submit'>Login</button>
                </div>
              </Form>
            </Formik>
        </div>
      
    </div>
  )
}
