import React from "react";
import ContactUs from "./../ContactUs";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("matches Received", () => {
  const tree = renderer.create(<ContactUs />).toJSON();
  expect(tree).toMatchSnapshot();
});
