import React from "react";
import { Link } from "react-router-dom";
import logo from "./noBackground.svg";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div id="navbar">
      <div id="navbarLogo">
        <Link to="/">
          <img src={logo} alt="Giftify Logo" />
        </Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        {/* Search -> with # symbol */}
        <Link to="/requests">Requests</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/about">About</Link>
        <Link to="/contactUs">Contact Us</Link>
        {/* Language Part */}
      </div>
      <div>{/* SIGNUP or PROFILE */}</div>
    </div>
  );
};

export default NavBar;
