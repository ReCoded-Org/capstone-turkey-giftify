import React from "react"
import { Navbar } from "react-bootstrap"
import "./Footer.css"
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons"

function Footer () {
    return (
      <Navbar className="footer">
        <Navbar.Brand href="#home">Brand Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Facebook className="socialIcons"  />
            <Instagram className="socialIcons" />
            <Twitter className="socialIcons" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Footer