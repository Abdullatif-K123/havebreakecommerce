import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CustomCardProps {
  title: string;
  text: string;
  link: string;
  buttonText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  text,
  link,
  buttonText,
}) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text style={{ fontSize: "14px" }}>{text}</Card.Text>
        <Link to={link}>
          <Button variant="primary">{buttonText}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
