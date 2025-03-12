import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </Form.Group>
  );
};

export default Input;
