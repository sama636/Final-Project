import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { $Auth_Data } from '../../store'
import { Navigate } from 'react-router';
import Dashboard from '../../Pages/Dashboard/Dashboard';

export default function NotLogged() {
    const[authData]= useRecoilState($Auth_Data);
    useEffect(()=>{
        if(authData.isAuth){
            Navigate(<Dashboard/>)
        }
    }, [authData])
  return (
    <div>
      
    </div>
  )
}
