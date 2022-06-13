import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Dashboard = () => {
  const useContextValue = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("on dashboard contextvalue", useContextValue);
  const logoutHandler = () => {
    useContextValue.logout();
    navigate("/login");
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Welcome to Dashboard page</h2>
          </Col>
        </Row>
        <Button bsStyle="bs-success" onClick={logoutHandler}>
          Logout
        </Button>
      </Container>
    </>
  );
};
export default Dashboard;
