import React from "react";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        {/* <Route exact path="/" component={Home} />
        <Route path="/requests" component={Requests} />
        <Route path="/donations" component={Donations} />
        <Route path="/about" component={About} />
        <Route path="/contactUs" component={ContactUs} /> */}
      </Router>
    </div>
  );
}

export default App;
