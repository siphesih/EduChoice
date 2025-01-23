import React, { useState } from "react"; // Removed useEffect since it's not used
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { FaBell, FaBook, FaDownload } from "react-icons/fa";
import "./HomeLoggedIn.css"; // Ensure this file exists

const HomeLoggedIn = () => {
  // Sample notifications (replace with actual API data)
  const [notifications] = useState([
    { id: 1, message: "New assignment uploaded for Mathematics." },
    { id: 2, message: "Class schedule updated for Science." },
    { id: 3, message: "Reminder: Submit your project by Friday!" },
  ]);

  // Sample subject notes (replace with actual API data)
  const [subjects] = useState([
    { id: 1, name: "Mathematics", note: "Algebra.pdf" },
    { id: 2, name: "Science", note: "Physics_Notes.pdf" },
    { id: 3, name: "History", note: "World_War_II.pdf" },
  ]);

  // Function to handle downloading a note
  const handleDownload = (note) => {
    alert(`Downloading ${note}`); // Replace with actual download logic
  };

  return (
    <Container className="mt-4">
      <Row>
        {/* Notifications Section */}
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <FaBell /> Notifications
            </Card.Header>
            <ListGroup variant="flush">
              {notifications.map((notification) => (
                <ListGroup.Item key={notification.id}>
                  {notification.message}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        {/* Subjects & Notes Section */}
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-success text-white">
              <FaBook /> Subject Notes
            </Card.Header>
            <ListGroup variant="flush">
              {subjects.map((subject) => (
                <ListGroup.Item key={subject.id} className="d-flex justify-content-between align-items-center">
                  {subject.name}
                  <Button variant="info" size="sm" onClick={() => handleDownload(subject.note)}>
                    <FaDownload /> Download
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeLoggedIn;
