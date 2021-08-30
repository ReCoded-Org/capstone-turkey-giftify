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
import SearchBar from "./components/SearchBar/SearchBar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Container fluid className="mainContainer">
        <Router>
          <ScrollToTop />
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/request-item/:id" component={RequestItem} />
          <Route path="/search" component={SearchBar} />
          {/* <Route path="/requests" component={Requests} />
          <Route path="/donations" component={Donations} />
          <Route path="/contactUs" component={ContactUs} /> */}
          <Route exact path="/about" component={AboutUs} />
          <Route path="/" component={Footer} />
        </Router>
      </Container>
    </>
  );
}

export default App;
