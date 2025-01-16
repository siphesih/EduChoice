import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SliderComponent from './SliderComponent'; // Import the SliderComponent
import './Homepage.css'; // Import the custom CSS for padding

const Homepage = () => {
  return (
    <>
      <div className="slider-section">
        <SliderComponent /> {/* Apply custom padding to the first section */}
      </div>

      {/* Section with the title and image */}
      <div className = "first-thing">
              <Container className="text-center mt-5 mb-5 section-title">
        <Row>
          <Col>
            <h2>We Are Always Ready to Help You &amp; Your Family</h2>
            <img src="img/section-img.png" alt="Section" className="my-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. Pretiumts</p>
          </Col>
        </Row>
      </Container>
      </div>


      {/* Welcome text and buttons */}
      <Container className="text-center mt-5 mb-5 welcome-section">
        <Row>
          <Col>
            <h1>Welcome to EduFlow</h1>
            <p>Your go-to platform for school registration.</p>
            <div>
              <Button variant="primary" href="/signup" className="mr-3">
                Signup
              </Button>
              <Button variant="secondary" href="/login">
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
