import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "../../components/CardPizza/CardPizza";
import { CartContext } from "../../context/CartContext";
import { PizzasContext } from "../../context/PizzasContext";

const Home = () => {
  const {
    setCart,
    setTotal,
    cart,
    quantities,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const { listPizzas } = useContext(PizzasContext);

  return (
    <>
      <Header />
      <Container>
        <Row>
          {listPizzas.map((pizza) => (
            <Col key={pizza.id}>
              <CardPizza
                pizza={pizza}
                setCart={setCart}
                setTotal={setTotal}
                cart={cart}
                quantities={quantities}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
