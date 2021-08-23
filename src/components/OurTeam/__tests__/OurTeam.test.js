import React from "react";
import OurTeam from "./../OurTeam";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("ourTeam rendered correctly", () => {
  const tree = renderer.create(<OurTeam />).toJSON();
  expect(tree).toMatchSnapshot();
});
