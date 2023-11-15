import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import EventDetail from '../Components/Events/EventDetail';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
import Globals from '../../globals';

const EventPage = () => {

    console.log(Globals.token);

    const [regUsers, setRegUsers] = useState(null);
    const [events, setEvents] = useState(null);
    const [count, setCount] = useState(null);
    const [paid, setPaid] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApis = async () => {
            try {
                const responseUsers = await fetch('http://127.0.0.1:8000/api/event/2/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Globals.token,
                    }
                });
                const resultUsers = await responseUsers.json();
                setRegUsers(resultUsers);

                // Iniciar fetch para o segundo endpoint
                const responseEvents = await fetch('http://127.0.0.1:8000/api/events', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const resultEvents = await responseEvents.json();
                setEvents(resultEvents);

                const responseCount = await fetch('http://127.0.0.1:8000/api/event/2/count', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Globals.token,
                    },
                });
                const resultCount = await responseCount.json();
                setCount(resultCount);

                const responsePaid = await fetch('http://127.0.0.1:8000/api/event/2/paidUsers', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Globals.token,
                    },
                });
                const resultPaid = await responsePaid.json();
                setPaid(resultPaid);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchApis();
    }, []);

    if (loading) return 'Loading...';
    if (error) return `Error: ${error}`;

    return (
        <>
            <div className='main_container'>
                <Navbar />
                <Row className='main-row'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <><Col><>{events.map(events => events.id === 2 ? (<h2 key={events.id}>{events.name}</h2>):null)}</>
                        <h2>Número total de participantes: {JSON.stringify(count, null, 2)}</h2>
                        <EventDetail state={{ paid: paid }} /></Col></>
                    )}
                <div>
                    <h1>Data from Reg Users</h1>
                    <pre>{JSON.stringify(regUsers, null, 2)}</pre>

                    <h1>Data from Events</h1>
                    <pre>{JSON.stringify(events, null, 2)}</pre>

                    <h1>Data from Total count</h1>
                    <pre>{JSON.stringify(count, null, 2)}</pre>

                    <h1>Data from Paid</h1>
                    <pre>{JSON.stringify(paid, null, 2)}</pre>
                </div>
            </Row>
        </div >
        </>
    );
};

export default EventPage;
