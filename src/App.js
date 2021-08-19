import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageSecondPart from "./containers/homePageSecondPart/HomePageSecondPart";
function App() {
  return (
    <>
      <Container className ="App">
        <HomePageSecondPart />
        <Footer />
      </Container>
    </>
  );
}

export default App;
