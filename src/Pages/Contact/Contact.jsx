import React, { useRef } from "react";
import emailjs from "emailjs-com";
import cont from "../../assets/cont.jpeg";
import "./Contact.scss";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_wfcdeb2", "template_rwktro5", e.target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  return (
    <>
      <div className="body">
        <h2 className="contant">Contact Us</h2>
        <p className="para">
          We offer unique properties suitable htmlFor any kind of comfort
        </p>
        <div className="container pt-5">
          <div className="row align-content-center g-4 flex-column flex-md-row align-items-stretch">
            <div className="col-10 col-md-6">
              <div className="h-100">
                <img className="cont h-100" src={cont} />
              </div>
            </div>
            <form className="form col-10 col-md-6" onSubmit={sendEmail}>
              <div className="row h-100">
                <div  className="text-start">
                  <label className="p-1">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="text-start ">
                  <label className="p-1">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div  className="text-start">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email "
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label "
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <button  type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
