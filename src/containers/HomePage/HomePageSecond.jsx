import React from "react";
import "./HomePageSecond.css";
import { Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePageSecond() {
  return (
    <>
    
    <Container  fluid id = "container">
      <SearchBar />
      </Container>
    </>  
    );
}

export default HomePageSecond;
