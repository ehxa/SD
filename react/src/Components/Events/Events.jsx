import React from 'react';
import './Events.css';
import {Link, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import localImage from '../Assets/location.png';
import dataImage from '../Assets/data.png';

const Events = ({state}) => {

    const data = state.event;

    return (
        <div className='container'>
            {data.map(event => (
                <Card key={event.id} className='card_container'>
                    <Card.Header className='title_event'>{event.name}</Card.Header>
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
