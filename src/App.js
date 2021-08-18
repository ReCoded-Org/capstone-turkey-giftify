import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageSecond from "./containers/HomePage/HomePageSecond";

function App() {
  return (
    <>
      <Container  className="container-fluid">
        <HomePageSecond />
        <Footer />
      </Container>
    </>
  );
}

export default App;
