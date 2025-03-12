import React, { useContext } from "react";
import { Navbar as BootstrapNavbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { removeFromStorage } from "../utils/storage";

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeFromStorage("user");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Container>
        <BootstrapNavbar.Brand>MyApp</BootstrapNavbar.Brand>
        {state.isAuthenticated && (
          <Nav>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
          </Nav>
        )}
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
