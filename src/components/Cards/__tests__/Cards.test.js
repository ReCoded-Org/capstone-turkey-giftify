import React from "react";
import Cards from "./../Cards";
import renderer from "react-test-renderer";


it("renders cards correctly", () => {
  const tree = renderer.create(<Cards />).toJSON();
  expect(tree).toMatchSnapshot();
});
