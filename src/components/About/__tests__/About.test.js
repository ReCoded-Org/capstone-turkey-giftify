import React from "react";
import About from "./../About";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("matches snapshot", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
