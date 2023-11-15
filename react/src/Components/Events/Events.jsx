import React from 'react';
import './Events.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import localImage from '../Assets/location.png';
import dataImage from '../Assets/data.png';
import { useEffect, useState } from 'react';

const Events = ({state}) => {

    const data = state.event;
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const responseCount = await fetch('http://127.0.0.1:8000/api/event/2/count', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ',
                    },
                });
                const resultCount = await responseCount.json();
                setCount(resultCount);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, []);

    if (loading) return 'Loading...';
    if (error) return `Error: ${error}`;

    return (
        <div className='eventsRes'>
            {data.map(event => (
                <Card key={event.id} className='card_container'>
                    <Card.Header className='title_event'>{event.name} <p>Total de participantes: {count}</p></Card.Header>
                    <Card.Body>
                        <Card.Text className='subtitle'>
                            <Card.Img variant="left" src={localImage} className='images' />
                            {event.place}
                        </Card.Text>
                        <Card.Text className='subtitle'>
                            <Card.Img variant="left" src={dataImage} className='images' />
                            {event.date}
                        </Card.Text>
                        <Link to={"/register"} state={{event: event.id}}>
                            <Button className='search_button' variant="primary">Register</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Events
