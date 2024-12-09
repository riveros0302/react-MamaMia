import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? JSON.parse(savedToken) : null;
  });
  const [user, setUser] = useState({});

  // Reusable fetch function
  const fetchData = async ({
    url,
    method = "GET",
    data = null,
    headers = {},
    setState,
  }) => {
    try {
      const response = await axios({
        url: `http://localhost:5000${url}`,
        method, // Especifica el método HTTP
        data, // Incluye datos para métodos como POST o PUT
        headers, // Permite configurar encabezados personalizados si es necesario
      });

      console.log("fetchData:", response.data);
      if (setState) {
        setState(response.data);
      } else {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const login = async (email, password, setSuccess, setError) => {
    try {
      const response = await fetchData({
        url: "/api/auth/login",
        method: "POST",
        data: { email, password },
      });

      setToken(response.token);
      localStorage.setItem("token", response.token);
      setSuccess("Inicio de sesión exitoso");
    } catch (error) {
      console.log("Login error:", error);
      setError(error.message || "Ocurrió un error en el inicio de sesión");
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetchData({
        url: "/api/auth/register",
        method: "POST",
        data: { email, password },
      });

      if (response) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
        setSuccess("Registro exitoso");
      }
    } catch (error) {
      console.log("error al registrar usuario: " + error);
    }
  };

  const getMe = async () => {
    try {
      const response = await fetchData({
        url: "/api/auth/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response);
    } catch (error) {
      console.log("error al obtener usuario logueado: " + error);
    }
  };

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ login, logout, fetchData, register, getMe, user, token }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
