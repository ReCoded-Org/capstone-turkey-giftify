import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  return (
    <>
      <Container>
        <OurTeam />
        <Footer />
      </Container>
    </>
  );
}

export default App;
