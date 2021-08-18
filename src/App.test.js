import React from "react";
import App from "./App";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("matches Received", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
