import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUSPage from "./Container/ContactUSPage";

function App() {
  return (
    <>
      <Container>
        <ContactUSPage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
