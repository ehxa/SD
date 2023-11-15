import React from 'react';
import Card from 'react-bootstrap/Card';
import './User.css';
import localImage from '../Assets/location.png';
import dataImage from '../Assets/data.png';

const User = ({state}) => {
  const data = state.event;
  console.log(data);
  return (
    <div className='eventsResult'>
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
                    </Card.Body>
                </Card>
            ))}
    </div>
  )
}

export default User
