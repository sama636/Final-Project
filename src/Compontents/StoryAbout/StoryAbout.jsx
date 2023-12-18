import React from "react";
import "./StoryAbout.scss";

export default function StoryAbout() {
  return (
    <div className="abs">
      <div className="container ">
        <h1 className="story">Our Story</h1>
        <div className="row p-3">
          <div className="col-6 p-5">
            <p className="p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
              ac consectetur ante, dapibus gravida tellus. Nullam aliquet
              eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus
              orci elementum augue, eget auctor metus ante sit amet velit.
            </p>
          </div>
          <div className="col-6 p-5">
            <p className="p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
              ac consectetur ante, dapibus gravida tellus. Nullam aliquet
              eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus
              orci elementum augue, eget auctor metus ante sit amet velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
