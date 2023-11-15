import React from 'react'
import Login from '../Components/Login/Login'
import Navbar from '../Components/Navbar/Navbar'
import "./Home.css";

const LoginPage = () => {
  return (
    <div className='main_container'> 
        <Navbar />
        <Login />
    </div>
  )
}

export default LoginPage
