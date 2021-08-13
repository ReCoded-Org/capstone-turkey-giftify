import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./containers/SignUp/SignUp";

function App() {
  return (
    <>
      <Container>
        <SignUp />
      </Container>
    </>
  );
}

export default App;
