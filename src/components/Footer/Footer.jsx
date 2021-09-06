import React from "react";
import { Navbar } from "react-bootstrap";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import navBarLogo from "../../images/navBarLogo.png";

function Footer() {
  return (
    <Navbar className="footer">
      <Navbar.Brand as={Link} to="/">
        <img src={navBarLogo} alt="brand logo" className="footerLogo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Facebook className="socialIcons" />
          <Instagram className="socialIcons" />
          <Twitter className="socialIcons" />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer;
