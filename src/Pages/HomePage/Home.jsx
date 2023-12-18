import React from 'react'
import "../HomePage/Home.scss"
import Welcome from '../../Compontents/Welcome/Welcome';
import Broker from '../../Compontents/Broker/Broker';
import Services from '../../Compontents/Services/Services';
import Featured from '../../Compontents/Featured/Featured';
import Sec from '../../Compontents/Sec/Sec';

export default function Home() {
  return (
    <div>
      <Welcome/>
      <Broker/>
      <Sec/>
      <Featured/>
      <Services/>
    </div>
  )
}
