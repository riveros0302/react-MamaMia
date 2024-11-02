import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { pizzas } from "../../data/pizzas";
import { formatCurrency } from "../../utils/formatCurrency";
import "./cart.css";

const Cart = () => {
  const [total, setTotal] = useState(
    pizzas.reduce((acc, pizza) => {
      return acc + pizza.price;
    }, 0)
  );

  const [quantities, setQuantities] = useState(
    pizzas.reduce((acc, pizza) => {
      acc[pizza.id] = 1;
      return acc;
    }, {})
  );

  const updateTotal = (newQuantities) => {
    const newTotal = Object.keys(newQuantities).reduce((acc, id) => {
      const pizza = pizzas.find((pizza) => pizza.id === Number(id));
      if (pizza) {
        return acc + pizza.price * newQuantities[id];
      }
      return acc;
    }, 0);
    setTotal(newTotal);
  };

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities, [id]: prevQuantities[id] + 1 };
      updateTotal(newQuantities);
      return newQuantities;
    });
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };

      if (newQuantities[id] > 1) {
        newQuantities[id] -= 1;
      } else {
        delete newQuantities[id];
      }

      updateTotal(newQuantities);
      return newQuantities;
    });
  };

  return (
    <Container className="mt-5 mb-5 contain">
      <h2>Carrito de Compras</h2>
      {pizzas
        .filter((pizza) => quantities[pizza.id] !== undefined)
        .map((pizza) => (
          <Card className="item-card" key={pizza.id}>
            <div className="first-item">
              <Card.Img
                src={pizza.img}
                alt={pizza.name}
                className="img-pizza"
              />
              <Card.Title>{pizza.name}</Card.Title>
            </div>
            <div className="second-item">
              <strong>
                {formatCurrency(pizza.price * quantities[pizza.id])}
              </strong>
              <div />
              <Button
                variant="outline-danger"
                onClick={() => decreaseQuantity(pizza.id)}
              >
                -
              </Button>
              <strong>{quantities[pizza.id]}</strong>
              <Button
                variant="outline-primary"
                onClick={() => increaseQuantity(pizza.id)}
              >
                +
              </Button>
            </div>
          </Card>
        ))}
      <hr />
      <h3>Total: {formatCurrency(total)}</h3>
    </Container>
  );
};

export default Cart;
