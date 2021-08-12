import React from "react";
import { Navbar } from "react-bootstrap";
import "./Footer.css";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <Navbar className="footer">
      <Navbar.Brand href="#home">
        <img
          src="http://3.bp.blogspot.com/-VWpWYpPjnjM/T3QqWuvfWnI/AAAAAAAAD8c/k1X10hfXOY8/s1600/0e677912799a1a9f40593ac28f0b3ea8.png"
          alt="brand logo"
          height="65"
          width="52"
        />
        Giftify!
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
