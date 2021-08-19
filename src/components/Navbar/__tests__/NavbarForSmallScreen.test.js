import React from "react";
import NavbarForSmallScreen from "./../NavbarForSmallScreen";
import renderer from "react-test-renderer";

it("NavbarForSmallScreen rendered correctly", () => {
  const tree = renderer.create(<NavbarForSmallScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
