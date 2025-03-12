import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  return state.isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
