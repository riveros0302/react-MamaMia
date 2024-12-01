import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BsCart, BsLock } from "react-icons/bs";
import "./navbar.css";
import { PiPizza } from "react-icons/pi";
import { formatCurrency } from "../../utils/formatCurrency";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const NavBar = () => {
  const { token, logout } = useContext(UserContext);
  console.log("que trae navbar token: " + token);

  const { total } = useContext(CartContext);

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
              <Button variant="link" className="nav-button" onClick={logout}>
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
