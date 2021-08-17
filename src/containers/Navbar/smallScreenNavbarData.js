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
    id: "a",
    cName: "navLi",
    target: "/",
    cNameLink: "navText",
    name: "Home",
    component: <HouseDoor />,
  },
  {
    id: "b",
    cName: "navLi",
    target: { pathname: "/", hash: "#search" },
    cNameLink: "navText",
    name: "Search",
    component: <Search />,
  },
  {
    id: "c",
    cName: "navLi",
    target: "/requests",
    cNameLink: "navText",
    name: "Requests",
    component: <Gift />,
  },
  {
    id: "d",
    cName: "navLi",
    target: "/donations",
    cNameLink: "navText",
    name: "Donations",
    component: <Heart />,
  },
  {
    id: "e",
    cName: "navLi",
    target: "/about",
    cNameLink: "navText",
    name: "About",
    component: <InfoCircle />,
  },
  {
    id: "f",
    cName: "navLi",
    target: "/contactUs",
    cNameLink: "navText",
    name: "Contact Us",
    component: <Envelope />,
  },
];
