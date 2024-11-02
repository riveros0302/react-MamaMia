import React, { useState } from "react";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "../CardPizza/CardPizza";
import { pizzas } from "../../data/pizzas";

const Home = () => {
  const [listPizzas, setListPizzas] = useState(pizzas);

  return (
    <>
      <Header />
      <Container>
        <Row>
          {listPizzas.map((pizza) => (
            <Col key={pizza.id}>
              <CardPizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
