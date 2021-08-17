import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
//import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <>
      <Container>
        {/*<Footer />*/}
        <UserProfile />
      </Container>
    </>
  );
}

export default App;
