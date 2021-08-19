import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageSecondPart from "./containers/homePageSecondPart/HomePageSecondPart";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
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

        <HomePageSecondPart className ="serachpart"/>
        <Footer />
      </Container>
    </>
  );
}

export default App;
