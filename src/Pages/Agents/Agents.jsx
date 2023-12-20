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
      <div className="row flex-column flex-md-row gap-4 m-auto">
        {broker.map((brokers, index) => {
          return (
            <div key={index} className="brokerCard m-auto">
              <Brokery brokers={brokers} />
            </div>
          );
        })}
      </div>
    </>
  );
}
