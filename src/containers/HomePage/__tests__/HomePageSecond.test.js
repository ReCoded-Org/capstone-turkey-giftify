import React from "react";
import HomePageSecond from "./../HomePageSecond";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("matches snapshot", () => {
  const tree = renderer.create(<HomePageSecond />).toJSON();
  expect(tree).toMatchSnapshot();
});
