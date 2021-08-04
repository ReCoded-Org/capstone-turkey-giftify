import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar} />
        {/* <Route exact path="/" component={Home} />
        <Route path="/requests" component={Requests} />
        <Route path="/donations" component={Donations} />
        <Route path="/about" component={About} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/" component={} /> */}
      </Router>
    </div>
  );
}

export default App;
