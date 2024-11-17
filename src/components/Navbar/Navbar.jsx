import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BsCart, BsLock } from "react-icons/bs";
import "./navbar.css";
import { PiPizza } from "react-icons/pi";
import { formatCurrency } from "../../utils/formatCurrency";
import { Link } from "react-router-dom";

const NavBar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar expand="lg" bg="dark" variant="light">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="logo">
          Mama Mia!
        </Navbar.Brand>
        <Nav className="me-auto">
          <Button as={Link} to={"/"} variant="link" className="nav-button">
            <PiPizza />
            Home
          </Button>

          {token ? (
            <>
              <Button
                as={Link}
                to={"/profile"}
                variant="link"
                className="nav-button"
              >
                <BsLock />
                Profile
              </Button>
              <Button
                as={Link}
                to={"/login"}
                variant="link"
                className="nav-button"
              >
                <BsLock />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                as={Link}
                to={"/login"}
                variant="link"
                className="nav-button"
              >
                <BsLock />
                Login
              </Button>
              <Button
                as={Link}
                to={"/register"}
                variant="link"
                className="nav-button"
              >
                <BsLock />
                Register
              </Button>
            </>
          )}
        </Nav>
        <Button as={Link} to={"/cart"} className="nav-button">
          <BsCart className="cart" /> Total: {formatCurrency(total)}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
