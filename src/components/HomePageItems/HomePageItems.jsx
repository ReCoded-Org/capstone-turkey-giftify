import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HomePageItems.css";
import HomePageItemCard from "../HomePageItemCard/HomePageItemCard";

function HomePageItems({ dbItems }) {
  return (
    <Row xs={2} md={3} xl={4} className="homePageItems">
      {dbItems.map((e) => (
        <Col key={e.id}>
          <HomePageItemCard itemName={e.itemName} id={e.id} image={e.image} />
        </Col>
      ))}
    </Row>
  );
}

export default HomePageItems;
