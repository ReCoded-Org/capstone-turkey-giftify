import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePageItemCard.css";
import placeholderImage from "../../images/placeholder.png";

function HomePageItemCard({
  itemName = "A Gift!",
  id,
  image = placeholderImage,
}) {
  return (
    <Card className="homePageItemCard">
      <Card.Img className="itemImage mx-auto" variant="top" src={image} />
      <Card.Body className="cardTitle">{itemName}</Card.Body>
      <Card.Body className="linkTitle">
        <Link to={`/request-item/${id}`}>Click to Request Item!</Link>
      </Card.Body>
    </Card>
  );
}

export default HomePageItemCard;
