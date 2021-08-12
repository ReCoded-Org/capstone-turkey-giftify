import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import HomePage from "./container/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container>
        <HomePage />
      </Container>
    </>
  );
}

export default App;
