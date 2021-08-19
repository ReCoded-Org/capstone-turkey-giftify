import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import About from "./containers/About/About";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Router>
          <Route path="/" component={Navbar} />
          {/* 
          <Route exact path="/" component={Home} />
          <Route path="/requests" component={Requests} />
          <Route path="/donations" component={Donations} />
          <Route path="/contactUs" component={ContactUs} /> 
          */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/" component={Footer} />
        </Router>
      </Container>
    </>
  );
}

export default App;
