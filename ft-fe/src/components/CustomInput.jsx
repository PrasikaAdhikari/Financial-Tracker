import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  // let id = "id";
  // let label = "label";
  // let type = "email";
  // let name = "email";
  // let placeholder = "Enter Email";

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default CustomInput;
