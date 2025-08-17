import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loggedUser, setLoggedUser] = useState();
  const navigate = useNavigate();

  function login(email, password) {
    console.log(email, password);
    if (user && user.email === email && user.password === password) {
      setLoggedUser({ name: user.name, email: user.email });
      return "login success";
    } else {
      setLoggedUser(null);
    }
  }

  function logout() {
    setLoggedUser(null);
    localStorage.removeItem("user");
    navigate("/");
  }

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    if (u) {
      setUser(u);
    }
  }, []);

  console.log(loggedUser, "in authProvider");

  return (
    <AuthContext.Provider value={{ login, loggedUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };