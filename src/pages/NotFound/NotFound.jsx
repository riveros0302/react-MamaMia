import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-1 text-danger">404</h1>
          <h2 className="mb-4">¡Ups! Página no encontrada</h2>
          <p className="mb-4">
            La página que estás buscando pudo haber sido eliminada, cambiado de
            nombre o no está disponible temporalmente.
          </p>
          <Button as={Link} to={"/"} variant="primary">
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
