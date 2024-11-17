import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "../../components/CardPizza/CardPizza";

const Home = () => {
  const [listPizzas, setListPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");

        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        setListPizzas(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPizzas();
  }, []);

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
