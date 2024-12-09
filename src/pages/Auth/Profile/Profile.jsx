import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { UserContext } from "../../../context/UserContext";

const Profile = () => {
  const { getMe, logout, user } = useContext(UserContext);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="mb-3">Perfil de Usuario</Card.Title>

              <Card.Text className="mb-4">
                Email:
                <strong> {user.email}</strong>
              </Card.Text>
              <Button variant="danger" onClick={logout}>
                Cerrar Sesión
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
