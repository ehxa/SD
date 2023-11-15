import React from 'react'
import NumberUser from '../Components/User/NumberUser'
import './Home'
import Navbar from '../Components/Navbar/Navbar'
const SearchEventsPage = () => {
  return (
    <div className='main_container'>
        <Navbar></Navbar>
        <NumberUser/>
    </div>
  )
}

export default SearchEventsPage
