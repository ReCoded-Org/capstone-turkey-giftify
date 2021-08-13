import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./containers/HomePage/HomePage";
import RequestItem from "./containers/RequestItem/RequestItem";

function App() {
  return (
    <Router>
      <Container fluid className="mainContainer">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/request-item/:id">
            <RequestItem />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
