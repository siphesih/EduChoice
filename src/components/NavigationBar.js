import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaBook, FaCalendarAlt, FaChartBar, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaHome, FaClock } from 'react-icons/fa';
import Signin from '../Sign/Signin';
import Signup from '../Sign/Signup';
import './Navbar.css';

const NavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('Signin');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user") ? true : false);
  const navigate = useNavigate();

  // Handle login success
  const handleLoginSuccess = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoggedIn(true);
    setShowModal(false);
  };

  // Handle signout
  const handleSignout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate('/');
  };

  // Handle modal opening
  const handleButtonClick = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  // Handle modal closing
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
              {isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/notifications">
                    <FaBell className="me-1" /> Notifications
                  </Nav.Link>
                  <Nav.Link as={Link} to="/subjects">
                    <FaBook className="me-1" /> Subjects
                  </Nav.Link>
                  <Nav.Link as={Link} to="/events">
                    <FaCalendarAlt className="me-1" /> School Events
                  </Nav.Link>
                  <Nav.Link as={Link} to="/performance">
                    <FaChartBar className="me-1" /> Performance
                  </Nav.Link>
                  <Nav.Link as={Link} to="/attendance">
                    <FaClock className="me-1" /> Attendance
                  </Nav.Link>
                  <Nav.Link as={Link} to="/timetable">
                    <FaClock className="me-1" /> TimeTable
                  </Nav.Link>
                  <Nav.Link onClick={handleSignout}>
                    <FaSignOutAlt className="me-1" /> Signout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/">
                    <FaHome className="me-1" /> Home
                  </Nav.Link>
                  <Nav.Link onClick={() => handleButtonClick('Signin')}>
                    <FaSignInAlt className="me-1" /> Signin
                  </Nav.Link>
                  <Nav.Link onClick={() => handleButtonClick('Signup')}>
                    <FaUserPlus className="me-1" /> Signup
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Signin and Signup */}
      <Modal show={showModal} onHide={handleCloseModal} className="modal-centered">
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'Signin' ? 'Sign In' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalType === 'Signin' ? <Signin onLoginSuccess={handleLoginSuccess} /> : <Signup />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavigationBar;
