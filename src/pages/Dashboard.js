import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { getFromStorage } from "../utils/storage";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getFromStorage("user");
    if (!state.isAuthenticated && !user) {
      navigate("/");
    }
  }, [state.isAuthenticated, navigate]);

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col md={12}>
            <Card title="Dashboard">
              <h3 className="text-center">
                Welcome, {state.user?.username || getFromStorage("user")?.username}!
              </h3>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
