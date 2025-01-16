import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS

const NavigationBar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">EduFlow</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto"> {/* Changed from ml-auto to ms-auto for Bootstrap 5 */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/* Commented out until these routes are implemented */}
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            {/* Add Signin and Signout Links if desired */}
            <Nav.Link as={Link} to="/Login">Signin</Nav.Link>
            <Nav.Link as={Link} to="/signout">Signout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
