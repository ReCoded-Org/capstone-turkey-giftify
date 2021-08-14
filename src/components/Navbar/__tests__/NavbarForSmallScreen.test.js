import React from "react";
import NavbarForSmallScreen from "./../NavbarForSmallScreen";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("matches snapshot", () => {
  const tree = renderer.create(<NavbarForSmallScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
