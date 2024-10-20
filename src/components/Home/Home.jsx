import React from "react";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import CardPizza from "../CardPizza/CardPizza";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            />
          </Col>
          <Col>
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img="https://www.hola.com/horizon/landscape/e9e1e82cb873-pepperoni-pizza-abob-t.jpg"
            />
          </Col>
          <Col>
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://www.debate.com.mx/img/2021/03/18/pizza_crop1616094369175.jpg?__scale=w:1200,h:900,t:2"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
