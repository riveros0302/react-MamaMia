import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Register = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "La contraseña debe ser mayor o igual a 6 caracteres",
        confirmButtonText: "Intentar de nuevo",
      });
    } else if (password !== confirmPassword) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden.",
        confirmButtonText: "Intentar de nuevo",
      });
      return;
    } else if (email && password && confirmPassword) {
      MySwal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu cuenta ha sido registrada con éxito.",
        confirmButtonText: "Continuar",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsLogin(true);
        }
      });
    }
  };

  return (
    <Container className="mt-5 mb-5 w-50">
      <h2 className="mb-4">Registro</h2>
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

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Contraseña:</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirma tu contraseña"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-20 mt-3">
          Registrarse
        </Button>
      </Form>
      <Button
        variant="secondary"
        type="submit"
        className="w-20 mt-3"
        onClick={() => setIsLogin(true)}
      >
        Iniciar Sesión
      </Button>
    </Container>
  );
};

export default Register;
