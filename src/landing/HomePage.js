import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import SliderComponent from './SliderComponent';
import './Homepage.css';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // Function to handle button clicks (for signup or login)
  const handleButtonClick = (type) => {
    setModalType(type); // Set the modal type based on the button clicked
    setShowModal(true);  // Show the modal
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="slider-section">
        <SliderComponent />
      </div>

      <div className="cardss">
        <Container className="cardss">
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Easy School Registration</Card.Title>
                  <Card.Text>Register your school with ease using EduFlow's simple and intuitive platform.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Manage Student Applications</Card.Title>
                  <Card.Text>Efficiently manage student applications and track progress seamlessly.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Secure and Reliable</Card.Title>
                  <Card.Text>Trust EduFlow to keep your school and student data secure and accessible.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Other Sections */}
      <div className="section-container">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Empower Your School's Growth</h1>
            <p className="lead fw-normal">
              EduFlow is designed to streamline school registration and make it easier for administrators to manage applications.
            </p>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>

      <div className="first-thing">
        <Container className="text-center mt-5 mb-5 section-title">
          <Row>
            <Col>
              <h2>We Are Always Ready to Help You &amp; Your Family</h2>
              <img src="img/section-img.png" alt="Section" className="my-4" />
              <p>At EduFlow, we understand how important education is. Our platform is built to help schools and families make the registration process smoother and more efficient.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="text-center mt-5 mb-5 welcome-section">
        <Row>
          <Col>
            <h1>Welcome to EduFlow</h1>
            <p>Your go-to platform for easy and efficient school registration.</p>
            <div>
              <Button variant="primary" onClick={() => handleButtonClick('signup')} className="mr-3">Get Started</Button>
              <Button variant="secondary" onClick={() => handleButtonClick('login')}>Login to Dashboard</Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for SignUp and SignIn */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'signup' ? 'Sign Up' : 'Sign In'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {modalType === 'signup'
              ? 'Please enter your details to sign up for EduFlow.'
              : 'Please enter your credentials to sign in to your dashboard.'}
          </p>
          {/* Add form fields here for signup or login */}
          {/* For now, we can just add placeholder inputs */}
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">
            {modalType === 'signup' ? 'Sign Up' : 'Sign In'}  
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Homepage;
