import React, { useEffect, useState } from "react";
import "../Agents/Agents.scss";
import Brokery from "../../Compontents/Brokery/Brokery";
import axios from "axios";

export default function Agents() {
  const [broker, setBroker] = useState([]);
  useEffect(() => {
    axios("http://localhost:3004/brokers").then((data) => setBroker(data.data));
  }, []);
  return (
    <>
      <div className="row">
        {broker.map((brokers, index) => {
          return (
            <div key={index}>
              <Brokery brokers={brokers} />
            </div>
          );
        })}
      </div>
    </>
  );
}
