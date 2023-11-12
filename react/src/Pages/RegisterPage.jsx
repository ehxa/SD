import React from 'react'
import Register from '../Components/Register/Register'
import Navbar from '../Components/Navbar/Navbar'
import "./Home.css";

const RegisterPage = () => {
  return (
    <div className='main_container'>
      <Navbar />
      <Register />
    </div>
  )
}

export default RegisterPage
