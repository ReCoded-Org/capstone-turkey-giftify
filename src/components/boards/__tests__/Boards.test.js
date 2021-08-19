import React from "react";
import Boards from "./../Boards";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders boards correctly", () => {
  const tree = renderer.create(<Boards allItems />).toJSON();
  expect(tree).toMatchSnapshot();
});
