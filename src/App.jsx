import "./App.scss";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutUs/About";
import Apsrtments from "./Pages/Apartments/Apartments";
import Villas from "./Pages/Villas/Villas";
import Agents from "./Pages/Agents/Agents";
import Contact from "./Pages/Contact/Contact";
import Header from "./Compontents/MainHeader/Header";
import Footer from "./Compontents/Footer/Footer";
import { ToastContainer } from "react-toastify";

import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $Current_Width, $Side_Menu_Index } from "./store";
import Dashboard from "./Pages/Dashboard/Dashboard";
// import UsersData from "./Pages/Dashboard/HomeDash/Users";

function App() {
  const [CurrentWidth, setCurrentWidth] = useRecoilState($Current_Width);
  const [sideMenuIndex, setSideMenuIndex] = useRecoilState($Side_Menu_Index);

  window.addEventListener("resize", () => {
    setCurrentWidth(window.innerWidth);
  });

  return (
    <div
      className="App"
      onClick={() => {
        setSideMenuIndex(false);
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apar" element={<Apsrtments />} />
          <Route path="/villa" element={<Villas />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
          {/* <Route path="/Dashboard/users" element={<UsersData />} /> */}
          <Route path="/agent" element={<Agents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={"404 Page"} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
