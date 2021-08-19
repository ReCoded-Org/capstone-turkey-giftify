import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    
    <>
      <Container>
        <Router>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Hero} />
          {/* <Route path="/requests" component={Requests} />
          <Route path="/donations" component={Donations} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} /> */}
          <Route path="/" component={Footer} />
        </Router>
      </Container>
    </>
  );
}

export default App;
