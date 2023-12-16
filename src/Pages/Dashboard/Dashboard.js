import React from "react";
import "./Dashboard.scss";
import Side from "./Side/Side";
import HomeDash from "./HomeDash/HomeDash";

export default function Dashboard() {
  return (
    <>
      <div className="row col-12">
          <Side />
          <HomeDash />
      </div>
    </>
  );
}
