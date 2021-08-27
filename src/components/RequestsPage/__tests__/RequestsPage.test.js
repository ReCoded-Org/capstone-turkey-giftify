import React from "react";
import RequestsPage from "./../RequestsPage";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("RequestsPage rendered correctly", () => {
  const tree = renderer.create(<RequestsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
