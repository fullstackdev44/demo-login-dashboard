import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

const Button = ({ text, onClick, variant = "primary", className = "" }) => {
  return (
    <BootstrapButton onClick={onClick} variant={variant} className={`w-100 ${className}`}>
      {text}
    </BootstrapButton>
  );
};

export default Button;
