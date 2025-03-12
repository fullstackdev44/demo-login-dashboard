// services/authService.js
export const login = (username, password) => {
    if (username === "admin" && password === "password") {
      return { username, token: "fake-jwt-token" }; // Simulated API response
    }
    return null;
  };
  