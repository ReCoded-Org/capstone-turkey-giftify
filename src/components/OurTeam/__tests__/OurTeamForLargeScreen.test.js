import React from "react";
import OurTeamForLargeScreen from "./../OurTeamForLargeScreen";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("OurTeamForLargeScreen rendered correctly", () => {
  const tree = renderer.create(<OurTeamForLargeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
