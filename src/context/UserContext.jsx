import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? JSON.parse(savedToken) : true;
  });

  const logout = () => {
    setToken(false);
    localStorage.setItem("token", false);
  };

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", JSON.stringify(newToken));
  };

  useEffect(() => {
    if (token !== false) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
