import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      {/* <Home />*/}
      {!isLogin ? (
        <Register setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}

      <Footer />
    </>
  );
}

export default App;
