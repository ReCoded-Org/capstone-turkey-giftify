import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { largeScreenNavbarData } from "./../../containers/Navbar/largeScreenNavbarData.js";

const NavbarForLargeScreen = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="navbarLogo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="navbarLinks">
          {largeScreenNavbarData.map((info) => (
            <Link to={info.target} className="eachLinksInNavbar" key={info.id}>
              {info.name}
            </Link>
          ))}
          <DropdownButton id="dropdownBasicButton" title="Language">
            <Dropdown.Item href="#/action-1">TUR</Dropdown.Item>
            <Dropdown.Item href="#/action-2">ENG</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="navbarProfile">
          <Link to="/logIn">
            <Button
              variant="primary"
              style={{ borderRadius: "0.75rem", marginBottom: "5%" }}
            >
              Log In
            </Button>
          </Link>
          <Link to="/signUp">
            <Button
              variant="primary"
              style={{ borderRadius: "0.75rem", marginBottom: "5%" }}
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default NavbarForLargeScreen;
