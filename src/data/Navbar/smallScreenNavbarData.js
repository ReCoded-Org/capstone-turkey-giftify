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
    target: "/",
    name: "Home",
    component: <HouseDoor />,
  },
  {
    id: "b",
    target: { pathname: "/", hash: "#search" },
    name: "Search",
    component: <Search />,
  },
  {
    id: "c",
    target: "/requests",
    name: "Requests",
    component: <Gift />,
  },
  {
    id: "d",
    target: "/donations",
    name: "Donations",
    component: <Heart />,
  },
  {
    id: "e",
    target: "/about",
    name: "About",
    component: <InfoCircle />,
  },
  {
    id: "f",
    target: "/contactUs",
    name: "Contact Us",
    component: <Envelope />,
  },
];
