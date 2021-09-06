import React from "react";
import Cards from "../Cards";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Cards rendered correctly", () => {
  const tree = renderer.create(<Cards allProducts />).toJSON();
  expect(tree).toMatchSnapshot();
});
