import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HomePageItems.css";
import HomePageItemCard from "../HomePageItemCard/HomePageItemCard";

function HomePageItems({ dbItems }) {
  return (
    <Row xs={2} md={3} xl={4} className="homePageItems">
      {dbItems.map((dbItem) => (
        <Col key={dbItem.id}>
          <HomePageItemCard
            itemName={dbItem.itemName}
            id={dbItem.id}
            image={dbItem.image}
          />
        </Col>
      ))}
    </Row>
  );
}

export default HomePageItems;
