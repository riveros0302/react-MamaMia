import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import Cart from "../pages/Cart/Cart";
import Pizza from "../pages/Pizza/Pizza";
import Profile from "../pages/Auth/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";

const MisRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/p001" element={<Pizza />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to={"/404"} />} />
    </Routes>
  );
};

export default MisRutas;
