import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import {
  List,
  HouseDoor,
  Search,
  Gift,
  Heart,
  InfoCircle,
  Envelope,
  GeoAlt,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NavbarForLargeScreens = () => {
  return (
    <div id="navbar">
      <div id="navbarLogo">
        <Link to="/">LOGO</Link>
      </div>
      <div id="navbarLinks">
        <Link to="/" className="eachLinksInNavbar">
          Home
        </Link>
        <Link
          to={{ pathname: "/", hash: "#search" }}
          className="eachLinksInNavbar"
        >
          Search
        </Link>
        <Link to="/requests" className="eachLinksInNavbar">
          Requests
        </Link>
        <Link to="/donations" className="eachLinksInNavbar">
          Donations
        </Link>
        <Link to="/about" className="eachLinksInNavbar">
          About
        </Link>
        <Link to="/contactUs" className="eachLinksInNavbar">
          Contact Us
        </Link>
        <DropdownButton id="dropdown-basic-button" title="Language">
          <Dropdown.Item href="#/action-1">TUR</Dropdown.Item>
          <Dropdown.Item href="#/action-2">ENG</Dropdown.Item>
        </DropdownButton>
      </div>
      <div id="navbarProfile">
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
  );
};

const NavbarForSmallScreen = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef && boxRef.current.contains(event.target)) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, boxRef);

  return (
    <>
      <div className="navbar-mobile">
        <Link to="#" className="menu-bars">
          <List onClick={showSidebar} />
        </Link>
        <Link to="/" className="navbar-mobile-logo">
          LOGO
        </Link>
      </div>
      <nav ref={boxRef} className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle" onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <List />
            </Link>
          </li>

          <li className="nav-li nav-li-login-sign" onClick={showSidebar}>
            <Link to="/logIn">
              <Button
                variant="primary"
                style={{ borderRadius: "0.75rem", marginBottom: "5%" }}
              >
                Log In
              </Button>
            </Link>
          </li>
          <li className="nav-li nav-li-login-sign" onClick={showSidebar}>
            <Link to="/signUp">
              <Button
                variant="primary"
                style={{ borderRadius: "0.75rem", marginBottom: "5%" }}
              >
                Sign Up
              </Button>
            </Link>
          </li>

          <li className="nav-li" onClick={showSidebar}>
            <Link to="/" className="nav-text">
              <HouseDoor /> &nbsp; Home
            </Link>
          </li>
          <li className="nav-li" onClick={showSidebar}>
            <Link to={{ pathname: "/", hash: "#search" }} className="nav-text">
              <Search /> &nbsp; Search
            </Link>
          </li>
          <li className="nav-li" onClick={showSidebar}>
            <Link to="/requests" className="nav-text">
              <Gift /> &nbsp; Requests
            </Link>
          </li>
          <li className="nav-li" onClick={showSidebar}>
            <Link to="/donations" className="nav-text">
              <Heart /> &nbsp; Donations
            </Link>
          </li>
          <li className="nav-li" onClick={showSidebar}>
            <Link to="/about" className="nav-text">
              <InfoCircle /> &nbsp; About
            </Link>
          </li>
          <li className="nav-li" onClick={showSidebar}>
            <Link to="/contactUs" className="nav-text">
              <Envelope /> &nbsp; Contact Us
            </Link>
          </li>
          <li className="nav-li nav-li-lang">
            <GeoAlt style={{ color: "black" }} />
            <DropdownButton id="dropdown-basic-button" title="Language">
              <Dropdown.Item href="#/action-1" onClick={showSidebar}>
                TUR
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={showSidebar}>
                ENG
              </Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      </nav>
    </>
  );
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Navbar = () => {
  const { width } = useWindowDimensions();

  if (width < 950) {
    return <NavbarForSmallScreen />;
  } else {
    return <NavbarForLargeScreens />;
  }
};

export default Navbar;
