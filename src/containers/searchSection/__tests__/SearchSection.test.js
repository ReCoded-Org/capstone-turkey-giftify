import React from "react";
import SearchSection from "./../SearchSection";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("matches snapshot", () => {
  const tree = renderer.create(<SearchSection />).toJSON();
  expect(tree).toMatchSnapshot();
});