import React from "react";
import renderer from "react-test-renderer";
import App from "../../App";

it("HomePageItems renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
