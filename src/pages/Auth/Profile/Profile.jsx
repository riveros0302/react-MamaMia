import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="mb-3">Perfil de Usuario</Card.Title>
              <Card.Text className="mb-4">
                <strong>riveros@gmail.com</strong>
              </Card.Text>
              <Button variant="danger">Cerrar Sesión</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
