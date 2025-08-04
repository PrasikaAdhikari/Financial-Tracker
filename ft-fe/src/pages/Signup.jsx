import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rounded-5">
        <Col lg={6}>
          <div>
            <h1>FINANCIAL TIPS</h1>
          </div>
        </Col>
        <Col lg={6}>
          {/* SIGNUP FORM */}
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
