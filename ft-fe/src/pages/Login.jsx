import React from "react";
import LoginForm from "../components/LoginForm";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded-5">
        <Col lg={6}>
          {/* Login FORM */}
          <LoginForm />
        </Col>
        <Col lg={6}>
          <div>
            <h1>Login HERE</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
