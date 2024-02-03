import React from 'react'
import { $Auth_Data } from '../../store';
import { useRecoilState } from 'recoil';
import "./LogOutButton.scss"

export default function LogOutButton() {
    const [authData, setAuthData] = useRecoilState($Auth_Data);
    
    function handelLogout(){
        setAuthData({
            isAuth: false,
            userId: null 
        })
        localStorage.removeItem('loggedInUser')
    }
  return (
    <button className='button__Log px-3' onClick={handelLogout}>Logout</button>
  )
}
