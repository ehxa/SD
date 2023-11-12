import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import './User.css';

const User = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ userData, setUserData] = useState({
        id: '',
        number: ''
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value
        });
      };
      const handleSearch = () => {
        fetch('http://127.0.0.1:8000/api/events', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setUserData(data);
          })
          .catch(error => console.error('Error:', error));
      };
  return (
    <div className='container'>
      <Card className="text-center">
            <Card.Header className='title_search'>Insert ID of the event</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="userEventID">
                      <Form.Label column sm="2">ID</Form.Label>
                      <Col sm="10"><Form.Control name="id" type="text" placeholder="123456" value={userData.id} onChange={handleInputChange}/></Col>
                    </Form.Group>
                  </Form>
                <Button variant="primary"className='search_button' onClick={handleShow}>Search</Button>
                </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Actual number of participants</Modal.Title>
            </Modal.Header>
            <Modal.Body>{userData.number}</Modal.Body>
            <Modal.Footer >
                <Button className='search_button' variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default User
