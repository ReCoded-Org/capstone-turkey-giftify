import React, { useState, useEffect, useRef } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { List, GeoAlt } from "react-bootstrap-icons";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { smallScreenNavbarData } from "./../../containers/Navbar/smallScreenNavbarData.js";

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
  }, []);

  return (
    <Router>
      <div className="navbarMobile">
        <Link to="#" className="menuBars">
          <List onClick={showSidebar} />
        </Link>
        <Link to="/" className="navbarMobileLogo">
          LOGO
        </Link>
      </div>
      <nav ref={boxRef} className={sidebar ? "navMenu active" : "navMenu"}>
        <ul className="navMenuItems">
          <li className="navbarToggle" onClick={showSidebar}>
            <Link to="#" className="menuBars">
              <List />
            </Link>
          </li>

          <li className="navLi navLiLoginSign" onClick={showSidebar}>
            <Link to="/logIn">
              <Button
                variant="primary"
                style={{ borderRadius: "0.75rem", marginBottom: "5%" }}
              >
                Log In
              </Button>
            </Link>
          </li>
          <li className="navLi navLiLoginSign" onClick={showSidebar}>
            <Link to="/signUp">
              <Button
                variant="primary"
                style={{ borderRadius: "0.75rem", marginBottom: "5%" }}
              >
                Sign Up
              </Button>
            </Link>
          </li>

          {smallScreenNavbarData.map((info, index) => (
            <li className={info.cName} onClick={showSidebar} key={index}>
              <Link to={info.target} className={info.cNameLink}>
                {info.component} &nbsp; {info.name}
              </Link>
            </li>
          ))}
          <li className="navLi navLiLang">
            <GeoAlt style={{ color: "black" }} />
            <DropdownButton id="dropdownBasicButton" title="Language">
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
    </Router>
  );
};

export default NavbarForSmallScreen;
