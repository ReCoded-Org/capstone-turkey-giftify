import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ConactUSPage from "./Container/ContactUSPage";


function App() {
  return (
    <>
      <Container>
        <Footer />
      </Container>
      <ConactUSPage/>
    </>
  );
}

export default App;
