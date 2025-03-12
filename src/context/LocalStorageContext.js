import React, { createContext, useReducer, useEffect } from "react";
// Load initial state from localStorage
const loadState = () => {
  const savedState = localStorage.getItem("authState");
  return savedState ? JSON.parse(savedState) : { user: null, isAuthenticated: false };
};
// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGOUT":
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, loadState);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};