import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { smallScreenNavbarData } from "./../../data/Navbar/smallScreenNavbarData.js";

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
    <>
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
          {smallScreenNavbarData.map((info) => (
            <li className="navLi" onClick={showSidebar} key={info.id}>
              <Link to={info.target} className="navText">
                {info.component} &nbsp; {info.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavbarForSmallScreen;
