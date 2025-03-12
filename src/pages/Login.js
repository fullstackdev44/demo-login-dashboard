import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { saveToStorage, getFromStorage } from "../utils/storage";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated || getFromStorage("user")) {
      navigate("/dashboard");
    }
  }, [state.isAuthenticated, navigate]);

  const handleLogin = () => {
    if (username === "testuser" && password === "password123") {
      const user = { username, token: "fake-token" };
      saveToStorage("user", user);
      dispatch({ type: "LOGIN", payload: user });
      navigate("/dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        <Col md={12}>
          <Card title="Login">
            <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text="Login" onClick={handleLogin} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
