import React from "react";
import NavbarForLargeScreen from "./../NavbarForLargeScreen";
import renderer from "react-test-renderer";


it("NavbarForLargeScreen rendered correctly", () => {
  const tree = renderer.create(<NavbarForLargeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
