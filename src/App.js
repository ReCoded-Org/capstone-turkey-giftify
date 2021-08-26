import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import AboutUs from "./containers/About/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import RequestItem from "./containers/RequestItem/RequestItem";
import SignUp from "./containers/SignUp/SignUp";

function App() {
  return (
    <>
      <Container fluid className="mainContainer">
        <Router>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/request-item/:id" component={RequestItem} />
          <Route exact path="/signUp" component={SignUp} />
          {/* <Route path="/donations" component={Donations} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} /> */}
          <Route exact path="/about" component={AboutUs} />
          <Route path="/" component={Footer} />
        </Router>
      </Container>
    </>
  );
}

export default App;
