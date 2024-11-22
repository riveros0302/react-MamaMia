import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import React from "react";
import MisRutas from "./routes/MisRutas";
import CartProvider from "./context/CartContext";
import PizzasProvider from "./context/PizzasContext";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <PizzasProvider>
          <MisRutas />
        </PizzasProvider>
      </CartProvider>

      <Footer />
    </>
  );
}

export default App;
