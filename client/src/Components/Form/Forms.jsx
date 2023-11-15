import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Forms.css"

const Forms = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    place: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/search', { state: { event: formData } });
  };

  return (
    <div className='form_container'>
        <Card className="text-center">
            <Card.Header className='title_search'>Search Event</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formEventName">
                      <Form.Label column sm="2">Name</Form.Label>
                      <Col sm="10"><Form.Control name="name" type="text" placeholder="Name" value={formData.name} onChange={handleInputChange}/></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formEventData">
                      <Form.Label column sm="2">Data</Form.Label>
                      <Col sm="10"><Form.Control name="date" type="date" placeholder="10/20/30" value={formData.date} onChange={handleInputChange}/></Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="forEventLocation">
                      <Form.Label column sm="2">Place</Form.Label>
                      <Col sm="10"><Form.Control name="place" type="text" placeholder="Ex: Funchal.." value={formData.place} onChange={handleInputChange}/></Col>
                    </Form.Group>
                    <Button type="submit" variant="primary" className='search_button'>
                      Search
                    </Button>
                  </Form>
                    
                </Card.Body>
        </Card>
    </div>
  )
}



export default Forms
