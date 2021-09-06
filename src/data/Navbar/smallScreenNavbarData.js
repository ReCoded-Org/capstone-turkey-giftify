import React from "react";
import {
  HouseDoor,
  Search,
  Gift,
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
    target: "/search",
    name: "Search",
    component: <Search />,
  },
  {
    id: "c",
    target: "/requestsPage",
    name: "Requests",
    component: <Gift />,
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
