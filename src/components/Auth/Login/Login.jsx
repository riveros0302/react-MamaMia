import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("La contraseña debe ser mayor o igual a 6 caracteres");
      setSuccess("");
    } else if (email === "riveros@gmail.com" && password === "123456") {
      setSuccess("Inicio de sesión exitoso.");
      setError("");
    } else {
      setError("Correo o contraseña incorrectos");
      setSuccess("");
      setEmail("");
      setPassword("");
    }
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
      <Button
        variant="secondary"
        type="submit"
        className="w-20 mt-3"
        onClick={() => setIsLogin(false)}
      >
        Registrarse
      </Button>
    </Container>
  );
};

export default Login;
