import React, {useEffect} from 'react'
import  { Navigate } from 'react-router-dom'
import {useProfile} from "../../Hooks/useProfile"
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
const Warning = ()=>{
    
    return (
      <>
      </>
    );
}


const Forum = () => {
    const {signIn, setSignIn} = useProfile();
    
    if (!signIn){
        // console.log("signIn", signIn)
        alert("you need to log in")
        return <Navigate to='/home'  />
    }


    return (
        <>
        Forum
        </>

        
    );
  };
  
  export  {Forum};