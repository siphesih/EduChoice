import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SliderComponent from './SliderComponent';
import './Homepage.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineLock } from "react-icons/ai"; // Use different icons

const Homepage = () => {
  return (
    <>
      <div className="slider-section">
        <SliderComponent />
      </div>

      <div className="cardss">
        <Container className="cardss">
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm text-center p-3">
                <div className="icon-container">
                  <AiOutlineHome size={50} className="text-primary" /> {/* Replaced icon */}
                </div>
                <Card.Body>
                  <Card.Title>Easy School Registration</Card.Title>
                  <Card.Text>
                    Register your school with ease using EduFlow's simple and intuitive platform.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm text-center p-3">
                <div className="icon-container">
                  <AiOutlineUser size={50} className="text-success" /> {/* Replaced icon */}
                </div>
                <Card.Body>
                  <Card.Title>Manage Student Applications</Card.Title>
                  <Card.Text>
                    Efficiently manage student applications and track progress seamlessly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm text-center p-3">
                <div className="icon-container">
                  <AiOutlineLock size={50} className="text-danger" /> {/* Replaced icon */}
                </div>
                <Card.Body>
                  <Card.Title>Secure and Reliable</Card.Title>
                  <Card.Text>
                    Trust EduFlow to keep your school and student data secure and accessible.
                  </Card.Text>
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
    </>
  );
};

export default Homepage;
