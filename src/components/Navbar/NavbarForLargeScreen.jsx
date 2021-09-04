import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { largeScreenNavbarData } from "../../data/Navbar/largeScreenNavbarData.js";

const NavbarForLargeScreen = () => {
  const { userId } = useSelector((state) => state.user);
  const displayProfile = userId === "" ? "none" : "inline-block";
  const displayLogin = userId === "" ? "inline-block" : "none";
  const dispatch = useDispatch();
  const LogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "user/logout",
        });
        // Sign-out successful.
      })
      .catch((error) => {
        alert(error);
        // An error happened.
      });
  };

  return (
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
        <DropdownButton className="dropdownBasicButton" title="Language">
          <Dropdown.Item href="#/action-1">TUR</Dropdown.Item>
          <Dropdown.Item href="#/action-2">ENG</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="navbarProfile">
        <Link to="/logIn">
          <Button
            variant="primary"
            style={{
              borderRadius: "0.75rem",
              marginBottom: "5%",
              display: displayLogin,
            }}
          >
            Login
          </Button>
        </Link>
        <Link to="/signUp">
          <Button
            variant="primary"
            style={{
              borderRadius: "0.75rem",
              marginBottom: "5%",
              display: displayLogin,
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link to="/signUp">
          {/* link to profile  */}
          <Button
            variant="primary"
            style={{
              borderRadius: "0.75rem",
              marginBottom: "5%",
              display: displayProfile,
            }}
          >
            Profile
          </Button>
        </Link>
        <Link to="/">
          <Button
            variant="primary"
            onClick={LogOut}
            style={{
              borderRadius: "0.75rem",
              marginBottom: "5%",
              display: displayProfile,
            }}
          >
            Log Out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarForLargeScreen;
