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
          We offer unique properties suitable for any kind of comfort
        </p>
        <div className="container pt-5">
          <div className="row flex-column flex-md-row align-items-stretch">
            <div className="col-10 col-md-6">
              <div className="h-100">
                <img className="cont h-100" src={cont} />
              </div>
            </div>
            <div className="form col-10 col-md-6" onSubmit={sendEmail}>
              <div className="row h-100">
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
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
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
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
                <button type="button" class="btnn btn-dark">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//     <form  onSubmit={sendEmail}>
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
