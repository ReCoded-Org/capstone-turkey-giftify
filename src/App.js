import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./containers/HomePage/HomePage";
function App() {
  return (
    <>
      <Container className ="App">
        <HomePage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
