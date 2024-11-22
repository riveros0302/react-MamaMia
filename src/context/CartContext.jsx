import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setQuantities((prevQuantities) => {
      return cart.reduce((acc, pizza) => {
        acc[pizza.id] = prevQuantities[pizza.id] || 1;
        return acc;
      }, {});
    });
  }, [cart]);

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities, [id]: prevQuantities[id] + 1 };
      return newQuantities;
    });
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };

      if (newQuantities[id] > 1) {
        newQuantities[id] -= 1;
      } else {
        delete newQuantities[id]; // Eliminar la cantidad del producto
      }

      return newQuantities;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        setTotal,
        quantities,
        setQuantities,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
