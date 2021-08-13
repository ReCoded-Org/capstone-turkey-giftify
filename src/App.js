import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Navbar} />
        {/* <Route exact path="/" component={Home} />
        <Route path="/requests" component={Requests} />
        <Route path="/donations" component={Donations} />
        <Route path="/about" component={About} />
        <Route path="/contactUs" component={ContactUs} /> */}
      </Router>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
