import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Cart from "../pages/Cart/Cart";
import Pizza from "../pages/Pizza/Pizza";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Auth/Profile/Profile";
import { UserContext } from "../context/UserContext";

const MisRutas = () => {
  const { token } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={token ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizzas/:id" element={<Pizza />} />
      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to={"/404"} />} />
    </Routes>
  );
};

export default MisRutas;
