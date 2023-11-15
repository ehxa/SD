import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './User.css';

const NumberUser = () => {
  const navigate = useNavigate();
  const [ userData, setUserData] = useState({
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/myEvents', { state: { event: userData } });
  };

  return (
    <div className='searchEvents'>
      <Card className="text-center">
            <Card.Header className='title_search'>Insert your email</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="userEvent">
                      <Form.Label column sm="2">Email</Form.Label>
                      <Col sm="10"><Form.Control  name="email" type="email" placeholder="example@gmail.com" value={userData.email} onChange={handleInputChange}/></Col>
                    </Form.Group>
                    <Button type="submit" variant="primary" className='search_button'>Search</Button>
                  </Form>
                  
              </Card.Body>
        </Card>
    </div>
  )
}

export default NumberUser
