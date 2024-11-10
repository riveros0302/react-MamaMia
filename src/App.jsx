import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Pizza from "./components/Pizza/Pizza";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      {/*<Cart />*/}
      {/*<Home />*/}
      {/*!isLogin ? (
        <Register setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )*/}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
