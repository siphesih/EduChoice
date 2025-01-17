import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SliderComponent from './SliderComponent';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <div className="slider-section">
        <SliderComponent />
      </div>

    <div className = "cardss"> 
      <Container className="cardss">
        <Row className="g-4"> {/* Bootstrap class for spacing */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card Title 1</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card Title 2</Card.Title>
                <Card.Text>Another brief description goes here.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card Title 3</Card.Title>
                <Card.Text>A short text about this card.</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      </div>

      {/* Other Sections */}
      <div className="section-container">
      <section className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="bg-light flex-fill me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Another headline</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
    </div>
    <div className="bg-primary flex-fill me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Another headline</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
    </div>
  </section>
</div>


      <div className="first-thing">
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

      <Container className="text-center mt-5 mb-5 welcome-section">
        <Row>
          <Col>
            <h1>Welcome to EduFlow</h1>
            <p>Your go-to platform for school registration.</p>
            <div>
              <Button variant="primary" href="/signup" className="mr-3">Signup</Button>
              <Button variant="secondary" href="/login">Login</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
