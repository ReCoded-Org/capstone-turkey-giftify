import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import AboutUs from "./containers/About/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import RequestItem from "./containers/RequestItem/RequestItem";
import RequestsPage from "./components/RequestsPage/RequestsPage"

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
          <Route exact path="/about" component={AboutUs} />
          <Route path="/" component={Footer} />
          <Route exact path="/requestsPage" component={RequestsPage}/>
        </Router>
      </Container>
    </>
  );
}

export default App;
