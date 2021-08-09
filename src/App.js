import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import HomePage from "./containers/HomePage/HomePage";
import RequestItem from "./containers/RequestItem/RequestItem"

function App() {
  return (
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
  );
}

export default App;
