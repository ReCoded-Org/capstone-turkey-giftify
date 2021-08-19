import React from "react";
import Cards from "./../Cards";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders cards correctly", () => {
  const tree = renderer.create(<Cards />).toJSON();
  expect(tree).toMatchSnapshot();
});
