import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About"

function App() {
  return (
    <>
      <Container>
        <About />
        <Footer />
      </Container>
    </>
  );
}

export default App;
