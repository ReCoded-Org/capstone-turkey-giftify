import React from "react";
import Categories from "../Categories";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Categories rendered correctly", () => {
  const tree = renderer
    .create(<Categories allCategories />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
