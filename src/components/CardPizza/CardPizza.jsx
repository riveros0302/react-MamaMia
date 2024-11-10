import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CardPizza.css"; // Si necesitas estilos específicos
import { formatCurrency } from "../../utils/formatCurrency";
import { PiPizza } from "react-icons/pi";
import { BsCart, BsEye } from "react-icons/bs";

const CardPizza = ({ pizza }) => {
  const { name, price, ingredients, img } = pizza;

  return (
    <Card className="pizza-card" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title className="nombre-pizza">{name}</Card.Title>
        <hr />
        <div>
          <span>Ingredientes:</span>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <hr />
        <Card.Text className="price-style">
          <strong>Precio: {formatCurrency(price)}</strong>
        </Card.Text>
        <div className="div-buttons">
          <Button variant="light">
            Ver Más <BsEye />
          </Button>
          <Button variant="dark">
            Añadir <BsCart />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
