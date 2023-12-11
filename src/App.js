import './App.scss';
import Home from './Pages/HomePage/Home';
import About from './Pages/AboutUs/About';
import Apsrtments from './Pages/Apartments/Apartments';
import Villas from './Pages/Villas/Villas';
import Agents from './Pages/Agents/Agents';
import Contact from './Pages/Contact/Contact';
import Header from './Compontents/MainHeader/Header';
import Footer from './Compontents/Footer/Footer'

import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { $Current_Width, $Side_Menu_Index } from './store';
import { useEffect } from 'react';

function App() {
  const [CurrentWidth, setCurrentWidth] = useRecoilState($Current_Width)
  const [sideMenuIndex , setSideMenuIndex] = useRecoilState($Side_Menu_Index)
  window.addEventListener("resize",()=>{
    setCurrentWidth(window.innerWidth);
  })

  return (
    <div className="App" onClick={()=>{
      setSideMenuIndex(false)
    }}>

      <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path='/'>
            <Route index element ={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/apar' element={<Apsrtments/>}/>
            <Route path='/villa' element={<Villas/>}/>
            <Route path='/agent' element={<Agents/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={"404 Page"}/>
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
