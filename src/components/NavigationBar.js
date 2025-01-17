import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Signin from '../Sign/Signin';  // Import Signin component
import './Navbar.css'; // Import custom CSS

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('Signin');  // Default to 'Signin'

  // Function to handle button clicks (for signin)
  const handleButtonClick = () => {
    setModalType('Signin'); // Set the modal type to 'Signin'
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
              {/* Only the Signin link */}
              <Nav.Link onClick={handleButtonClick}>Signin</Nav.Link>
              <Nav.Link as={Link} to="/signout">Signout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Signin */}
      <Modal show={showModal} onHide={handleCloseModal} className="modal-centered">
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render the Signin form */}
          <Signin />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavigationBar;
