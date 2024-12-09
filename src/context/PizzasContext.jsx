import React, { useEffect, useState, createContext, useContext } from "react";
import { UserContext } from "./UserContext";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [listPizzas, setListPizzas] = useState([]);
  const { fetchData } = useContext(UserContext);

  useEffect(() => {
    fetchData({ url: "/api/pizzas", setState: setListPizzas });
  }, []);

  return (
    <PizzasContext.Provider value={{ listPizzas, fetchData }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
