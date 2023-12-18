import React, { useState } from 'react'
import "./header.scss"
import SideMenu from '../SideMenu/SideMenu';
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import plogo from "../../assets/plogo.jpeg"
import { FaBars } from "react-icons/fa";
import { $Current_Width, $Side_Menu_Index } from '../../store'
import Login
from '../Login/Login';
import Sign from '../Sign/Sign';

export default function Header() {
    const headerLinks =[
        {path :"/" , name: 'Home'},
        {path :"/about" , name: 'About Us'},
        {path :"/apar" , name: 'Apartments'},
        {path :"/villa" , name: 'Villas'},
        {path :"/agent" , name: 'Our Agents'},
        {path :"/contact" , name: 'Contact'},
    ]
    const [sideMenuIndex , setSideMenuIndex] = useRecoilState($Side_Menu_Index)
    const [Current_Width] = useRecoilState($Current_Width)
    const[CurrentIndex , setCurrentIndex] = useState(0);
return (
    <header className='col-12' id='MainHeader'>
        {
            Current_Width <=767 && sideMenuIndex == true ? <SideMenu/> : null
        } 
        <img className='appLogo' src={plogo}/>
        {
            Current_Width <=767 ? (<FaBars className='icon' onClick={(e)=>{
                e.stopPropagation()

                sideMenuIndex == true ? setSideMenuIndex(false) : setSideMenuIndex(true);
            }}  />) : 
            (<nav>{
                headerLinks.map((link,index)=>{
                    return <Link onClick={()=>{
                        setCurrentIndex(index);
                    }} key={index} to={link.path} className={CurrentIndex == index ? "activeLink" : null}>{link.name}</Link>;
                })}
            </nav>)
        }
        <div className='loog'>
        <Login/><Sign/>
        </div>
    </header>
)}
