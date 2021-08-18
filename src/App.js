import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./containers/SignUp/SignUp";

function App() {
  return (
    <>
      <Container>
        <SignUp />
        <Footer />
      </Container>
    </>
  );
}

export default App;
