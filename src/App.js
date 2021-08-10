import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./containers/HomePage/HomePage";
import RequestItem from "./containers/RequestItem/RequestItem";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Container fluid>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/request-item">
              <RequestItem />
            </Route>
          </Switch>
        </Container>
      </Router>
      <Footer />
    </>
  );
}

export default App;
