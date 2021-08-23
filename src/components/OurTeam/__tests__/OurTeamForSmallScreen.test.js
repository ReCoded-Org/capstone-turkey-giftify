import React from "react";
import OurTeamForSmallScreen from "./../OurTeamForSmallScreen";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("OurTeamForSmallScreen rendered correctly", () => {
  const tree = renderer.create(<OurTeamForSmallScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
