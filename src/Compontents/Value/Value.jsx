import React from "react";
import "./Value.scss";
import room from "../../assets/room.jpg";
import slide from "../../assets/slide.jpg";
import splide from "../../assets/splide.jpg";
import apt from "../../assets/apt.jpg";
import noor from "../../assets/noor.jpg";
import newyourk from "../../assets/newyork.jpg";

export default function Value() {
  return (
    <>
      <div className="value">
        <div className="Value__Our">
          <h1 className="p-5">Our Values</h1>
          <div className="row Value__Sec flex-column flex-md-row d-flex justify-content-center ">
            <div className="col-12 col-md-3 p-3 ser">
              <img className="room rounded-2 w-100" src={room} />
              <h4 className="mt-4">Quality</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col-12 col-md-3 p-3 ser">
              <img className="room rounded-2 w-100" src={slide} />
              <h4 className="mt-4">Teamwork</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col-12 col-md-3 p-3 ser">
              <img className="room rounded-2 w-100" src={splide} />
              <h4 className="mt-4">Respect</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="row Value__Sec flex-column flex-md-row d-flex justify-content-center">
            <div className="col-12 col-md-3 p-3 ser">
              <img className="room rounded-2 w-100" src={apt} />
              <h4 className="mt-4">Integrity</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col-12 col-md-3 p-3 ser">
              <img className="room rounded-2 w-100" src={newyourk} />
              <h4 className="mt-4">Responsibility</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col-12 col-md-3 p-3 ser">
              <img className="room rounded-2 w-100" src={noor} />
              <h4 className="mt-4">Innovative</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
