import React from "react";
import Navbar from "./../Navbar";
import renderer from "react-test-renderer";


it("Navbar rendered correctly", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
