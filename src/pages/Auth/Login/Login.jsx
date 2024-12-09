import React, { useContext, useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { UserContext } from "../../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password, setSuccess, setError);
  };

  return (
    <Container className="mt-5 mb-5 w-50">
      <h2 className="mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Ingresa tu email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingresa tu contraseña"
          />
        </Form.Group>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Button variant="primary" type="submit" className="w-20 mt-3">
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
