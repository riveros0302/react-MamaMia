import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./pizza.css";
import { formatCurrency } from "../../utils/formatCurrency";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Pizza = () => {
  const { fetchData } = useContext(UserContext);
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetchData({ url: `/api/pizzas/${id}`, setState: setPizza });
  }, [id]);

  if (!pizza) {
    return <p>Cargando pizza...</p>; // Mostrar un mensaje mientras se cargan los datos
  }

  return (
    <Container className="pizza-container">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={pizza.img} alt={pizza.name} className="pizza-img-large" />
        </Col>
        <Col md={6}>
          <h1>{pizza.name}</h1>
          <p className="pizza-description">{pizza.desc}</p>
          <div>
            <strong>Ingredientes:</strong>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <h3 className="mt-4">Precio: {formatCurrency(pizza.price)}</h3>
          <Button variant="dark" size="lg" className="mt-3">
            Añadir al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Pizza;
