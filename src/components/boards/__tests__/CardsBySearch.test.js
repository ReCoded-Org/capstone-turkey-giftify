import React from "react";
import CardsBySearch from "../CardsBySearch";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("CardsBySearch rendered correctly", () => {
  const tree = renderer.create(<CardsBySearch allProducts />).toJSON();
  expect(tree).toMatchSnapshot();
});
