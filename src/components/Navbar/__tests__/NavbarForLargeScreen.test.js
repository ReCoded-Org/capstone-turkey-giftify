import React from "react";
import NavbarForLargeScreen from "./../NavbarForLargeScreen";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("NavbarForLargeScreen  rendered correctly", () => {
  const tree = renderer.create(<NavbarForLargeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
