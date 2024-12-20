import React, { useContext, useState, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { formatCurrency } from "../../utils/formatCurrency";
import "./cart.css";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Cart = () => {
  const {
    cart,
    setCart,
    setTotal,
    total,
    quantities,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const { token, fetchData } = useContext(UserContext);

  // Recalcula el total cuando cambian las cantidades o el carrito
  useEffect(() => {
    const newTotal = cart.reduce((acc, pizza) => {
      return acc + pizza.price * (quantities[pizza.id] || 0);
    }, 0);
    setTotal(newTotal);
  }, [cart, quantities]);

  const handleSubmit = async () => {
    try {
      const response = await fetchData({
        url: "/api/checkouts",
        method: "POST",
        data: {
          cart,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      MySwal.fire({
        icon: "success",
        title: response.message,
        text: `${response.user.email}, tu compra fue realizada con exito.
        Nmro Compra: ${response.user.iat}`,
        confirmButtonText: "Continuar",
      });
      setCart([]);
    } catch (error) {}
  };

  return (
    <Container className="mt-5 mb-5 contain">
      <h2>Carrito de Compras</h2>
      {cart
        .filter((pizza) => quantities[pizza.id] !== undefined)
        .map((pizza) => (
          <Card className="item-card" key={pizza.id}>
            <div className="first-item">
              <Card.Img
                src={pizza.img}
                alt={pizza.name}
                className="img-pizza"
              />
              <Card.Title className="title-pizza">{pizza.name}</Card.Title>
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
      <div className="total">
        <h3>Total: {formatCurrency(total)}</h3>
        <Button
          variant="outline-primary"
          onClick={handleSubmit}
          disabled={!token}
        >
          Pagar
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
