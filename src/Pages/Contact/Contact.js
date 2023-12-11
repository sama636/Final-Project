import React, { useRef } from "react";
import emailjs from "emailjs-com";
import cont from "../../assets/cont.jpeg";
import "./Contact.scss";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("gmail", "YOUR_EMAIL", e.target, "YOUR_USER_ID").then(
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
          <div className="row">
            <div className="col-6">
              <img className="cont" src={cont} />
            </div>
            <div className="col-6 form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col-6">
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