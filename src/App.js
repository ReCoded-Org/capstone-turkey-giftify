import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container>
        <Hero />
        <Footer />
      </Container>
    </>
  );
}

export default App;
