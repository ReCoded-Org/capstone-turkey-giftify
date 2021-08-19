import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./containers/HomePage/HomePage";
function App() {
  return (
    <>
      <Container className ="App">
        <HomePage />
        <Footer />
=======
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import RequestItem from "./containers/RequestItem/RequestItem";

function App() {
  return (
    <>
      <Container fluid className="mainContainer">
        <Router>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/request-item/:id" component={RequestItem} />
          {/* <Route path="/donations" component={Donations} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} /> */}
          <Route path="/" component={Footer} />
        </Router>
>>>>>>> dev
      </Container>
    </>
  );
}

export default App;
