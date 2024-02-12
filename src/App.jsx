import "./App.scss";
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutUs/About";
import Apsrtments from "./Pages/Apartments/Apartments";
import Villas from "./Pages/Villas/Villas";
import Agents from "./Pages/Agents/Agents";
import CheckOut from "./Compontents/CheckOut/CheckOut";
import Contact from "./Pages/Contact/Contact";
import Header from "./Compontents/MainHeader/Header";
import Footer from "./Compontents/Footer/Footer";
import IsLoggedIn from "./Compontents/ProtectedRoute/IsLoggedIn";
import Profile from "./Compontents/Profile1/Profile";
import ProfileBroker from "./Compontents/ProfileBroker/ProfileBroker";
import Reg from "./Compontents/Reg/Reg";
import Profilbroker from "./Compontents/Profilbroker/Profilbroker";
import Log from "./Compontents/Log/Log";
import NotLoggedIn from "./Compontents/ProtectedRoute/NotLoggedIn";
import { ToastContainer } from "react-toastify";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $Current_Width, $Side_Menu_Index } from "./store";
import Dashboard from "./Pages/Dashboard/Dashboard";

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
          <Route path="/apar" element={<IsLoggedIn><Apsrtments /></IsLoggedIn>} />
          <Route path="/villa" element={<IsLoggedIn><Villas /></IsLoggedIn>} />
          <Route path="/Dashboard" element={<IsLoggedIn><Dashboard /></IsLoggedIn>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/Profilbroker" element={<Profilbroker />} />
          <Route path="/ProfileBroker" element={<ProfileBroker />} />
          <Route path="/Reg" element={<NotLoggedIn><Reg /></NotLoggedIn>} />
          <Route path="/Log" element={<NotLoggedIn><Log /></NotLoggedIn>} />
          <Route path="/agent" element={<IsLoggedIn><Agents /></IsLoggedIn>} />
          <Route path="/contact" element={<IsLoggedIn><Contact /></IsLoggedIn>} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
export default App;
