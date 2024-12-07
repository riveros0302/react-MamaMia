import React, { useEffect, useState, createContext } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [listPizzas, setListPizzas] = useState([]);

  // Reusable fetch function
  const fetchData = async (url, callback) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();
      callback(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("http://localhost:5000/api/pizzas", setListPizzas);
  }, []);

  return (
    <PizzasContext.Provider value={{ listPizzas, fetchData }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
