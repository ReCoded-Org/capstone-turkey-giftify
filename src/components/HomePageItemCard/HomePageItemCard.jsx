import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import coffeepot from "../../images/coffeepot.jpg";
import "./HomePageItemCard.css";

function HomePageItemCard({ itemName = "", id }) {
  return (
    <Card className="homePageItemCard">
      <Card.Img className="itemImage mx-auto" variant="top" src={coffeepot} />
      <Card.Body className="cardTitle">
        {itemName}
        {id}
      </Card.Body>
      <Card.Body className="linkTitle">
        <Link to="/request-item" exact>
          Click to Request Item!
        </Link>
      </Card.Body>
    </Card>
  );
}

export default HomePageItemCard;
