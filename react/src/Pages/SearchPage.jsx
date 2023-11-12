import React, {useEffect, useState} from 'react'
import Events from '../Components/Events/Events';
import Navbar from '../Components/Navbar/Navbar';
import "./Home.css";
import User from '../Components/User/User';
import {useLocation} from "react-router-dom";

const SearchPage = () => {

    const location = useLocation();
    const formData = location.state && location.state.event;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/filter?name=' + formData.name + '&date=' + formData.date + '&place=' + formData.place, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error');
            }

            const d = await response.json();
            setData(d);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='main_container'>
            <Navbar />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Events state={{event: data}} />
            )}
            <User />
        </div>
      )
}

export default SearchPage
