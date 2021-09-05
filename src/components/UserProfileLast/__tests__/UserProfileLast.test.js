import React from "react";
import UserProfileLast from "./../UserProfileLast";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("UserProfileLast rendered correctly", () => {
  const tree = renderer.create(<UserProfileLast />).toJSON();
  expect(tree).toMatchSnapshot();
});
