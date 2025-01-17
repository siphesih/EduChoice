import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Signin.css'; // Ensure your CSS file is still imported

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User signed in:', formData);
  };

  return (
    <Container className="signin-container mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5} className="bg-dark p-4 rounded"> 
          {/* Added Bootstrap classes bg-dark for dark background and rounded for borders */}
          <div className="text-center mb-4">
            <p className="text-light">Please enter your credentials to sign in.</p> {/* text-light makes it white */}
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className="text-light">Email</Form.Label> {/* Label in white */}
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="bg-transparent text-light border-light" /* Input in white */
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label className="text-light">Password</Form.Label> {/* Label in white */}
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="bg-transparent text-light border-light" /* Input in white */
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin; 