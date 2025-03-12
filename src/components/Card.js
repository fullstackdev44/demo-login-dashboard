import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";

const Card = ({ title, children }) => {
  return (
    <BootstrapCard className="shadow-lg p-4">
      <BootstrapCard.Body>
        {title && <h3 className="text-center mb-3">{title}</h3>}
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
