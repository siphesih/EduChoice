import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Signin from '../Sign/Signin';  // Import Signin component
import Signup from '../Sign/Signiup';  // Import Signup component
import './Navbar.css'; // Import custom CSS

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // Function to handle button clicks (for signup or signin)
  const handleButtonClick = (type) => {
    setModalType(type); // Set the modal type (either Signup or Signin)
    setShowModal(true);  // Show the modal
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">EduFlow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {/* Links for Signup and Signin which open the modal */}
              <Nav.Link onClick={() => handleButtonClick('Signup')}>Signup</Nav.Link>
              <Nav.Link onClick={() => handleButtonClick('Signin')}>Signin</Nav.Link>
              <Nav.Link as={Link} to="/signout">Signout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Signup or Signin */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'Signup' ? 'Sign Up' : 'Sign In'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render either Signup or Signin form based on modalType */}
          {modalType === 'Signup' ? (
            <Signup />
          ) : (
            <Signin />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavigationBar;
