import React from "react";
import "./Navbar.css";
import {
  useWindowDimensions,
} from "./../../hooks/windowSize";
import NavbarForSmallScreen from "./NavbarForSmallScreen";
import NavbarForLargeScreen from "./NavbarForLargeScreen"

const Navbar = () => {

  const { width } = useWindowDimensions();

  if (width <= 991) {
    return <NavbarForSmallScreen />;
  } else {
    return <NavbarForLargeScreen />;
  }
};

export default Navbar;
