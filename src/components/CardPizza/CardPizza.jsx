import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CardPizza.css";
import { formatCurrency } from "../../utils/formatCurrency";
import { BsCart, BsEye, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardPizza = ({
  pizza,
  setCart,
  setTotal,
  cart,
  quantities,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const { name, price, ingredients, img, id } = pizza;
  const isInCart = cart.some((item) => item.id === id);

  const addCart = () => {
    if (isInCart) {
      increaseQuantity(pizza.id);
    } else {
      setCart((prevCart) => [...prevCart, pizza]);
    }

    setTotal((prevTotal) => prevTotal + pizza.price);
  };

  const removeCart = () => {
    if (quantities[pizza.id] === 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      decreaseQuantity(pizza.id);
    }
    setTotal((prevTotal) => prevTotal - pizza.price);
  };

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
          <Button as={Link} to={"/pizza/p001"} variant="light">
            Ver Más <BsEye />
          </Button>
          {isInCart ? (
            <div className="div-addQuantity">
              <Button variant="danger" onClick={removeCart}>
                {quantities[pizza.id] === 1 ? <BsFillTrashFill /> : "-"}
              </Button>
              <Card.Text>{quantities[pizza.id]}</Card.Text>
              <Button variant="dark" onClick={addCart}>
                +
              </Button>
            </div>
          ) : (
            <Button variant="dark" onClick={addCart}>
              Añadir <BsCart />
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
