import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ContactUsPage from "./containers/ContactUsPage/ContactUsPage";
import AboutUs from "./containers/About/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./containers/HomePage/HomePage";
import RequestItem from "./containers/RequestItem/RequestItem";
import RequestsPage from "./components/RequestsPage/RequestsPage";
import DonatersMessagePage from "./components/RequestsPage/DonatersMessagePage";
import AddProduct from "./components/RequestsPage/AddProduct";
import SearchBar from "./components/SearchBar/SearchBar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import UserProfileLast from "./components/UserProfileLast/UserProfileLast";

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
          <Route path="/donations" component={Donations} /> */}
          <Route path="/contactUs" component={ContactUsPage} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/userProfile" component={UserProfileLast} />
          <Route exact path="/requestsPage" component={RequestsPage} />
          <Route
            exact
            path="/donatersMessagePage/:category/:id"
            component={DonatersMessagePage}
          />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Footer} />
        </Router>
      </Container>
    </>
  );
}

export default App;
