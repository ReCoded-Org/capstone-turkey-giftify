import React from "react";
import CardsByCategory from "../CardsByCategory";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("CardsByCategory rendered correctly", () => {
  const tree = renderer.create(<CardsByCategory />).toJSON();
  expect(tree).toMatchSnapshot();
});
