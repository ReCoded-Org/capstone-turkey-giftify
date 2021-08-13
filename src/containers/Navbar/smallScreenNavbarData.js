import React from "react";
import {
  HouseDoor,
  Search,
  Gift,
  Heart,
  InfoCircle,
  Envelope,
} from "react-bootstrap-icons";

export const smallScreenNavbarData = [
  {
    cName: "navLi",
    target: "/",
    cNameLink: "navText",
    name: "Home",
    component: <HouseDoor />,
  },
  {
    cName: "navLi",
    target: { pathname: "/", hash: "#search" },
    cNameLink: "navText",
    name: "Search",
    component: <Search />,
  },
  {
    cName: "navLi",
    target: "/requests",
    cNameLink: "navText",
    name: "Requests",
    component: <Gift />,
  },
  {
    cName: "navLi",
    target: "/donations",
    cNameLink: "navText",
    name: "Donations",
    component: <Heart />,
  },
  {
    cName: "navLi",
    target: "/about",
    cNameLink: "navText",
    name: "About",
    component: <InfoCircle />,
  },
  {
    cName: "navLi",
    target: "/contactUs",
    cNameLink: "navText",
    name: "Contact Us",
    component: <Envelope />,
  },
];
