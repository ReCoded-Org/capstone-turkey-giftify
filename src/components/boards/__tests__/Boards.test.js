import React from "react";
import Boards from "./../Boards";
import renderer from "react-test-renderer";


it("renders boards correctly", () => {
  const tree = renderer.create(<Boards allItems />).toJSON();
  expect(tree).toMatchSnapshot();
});