import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BsCart, BsLock } from "react-icons/bs";
import "./navbar.css";
import { PiPizza } from "react-icons/pi";
import { formatCurrency } from "../../utils/formatCurrency";

const NavBar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar expand="lg" bg="dark" variant="light">
      <Container>
        <Navbar.Brand href="#" className="logo">
          Mama Mia!
        </Navbar.Brand>
        <Nav className="me-auto">
          <Button variant="link" className="nav-button">
            <PiPizza />
            Home
          </Button>

          {token ? (
            <>
              <Button variant="link" className="nav-button">
                <BsLock />
                Profile
              </Button>
              <Button variant="link" className="nav-button">
                <BsLock />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="link" className="nav-button">
                <BsLock />
                Login
              </Button>
              <Button variant="link" className="nav-button">
                <BsLock />
                Register
              </Button>
            </>
          )}
        </Nav>
        <Button className="nav-button">
          <BsCart className="cart" /> Total: {formatCurrency(total)}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
