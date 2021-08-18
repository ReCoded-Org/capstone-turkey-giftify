import React from "react";
import OurTeamForLargeScreen from "./OurTeamForLargeScreen";
import OurTeamForSmallScreen from "./OurTeamForSmallScreen";
import { useWindowDimensions } from "./../../hooks/windowSize";
import "./OurTeam.css";

const OurTeam = () => {
  const { width } = useWindowDimensions();

  if (width <= 991) {
    return <OurTeamForSmallScreen />;
  } else {
    return <OurTeamForLargeScreen />;
  }
};

export default OurTeam;
