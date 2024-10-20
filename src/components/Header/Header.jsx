import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css"; // Asegúrate de crear este archivo para los estilos personalizados

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <Container className="text-center">
          <h1 className="display-4">Pizzas Mama Mia</h1>
          <p className="lead">Las mejores pizzas que podrás encontrar</p>
        </Container>
      </div>
    </header>
  );
};

export default Header;
