import React from "react";
import SingleCard from "../SingleCard";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Single Card Page rendered correctly", () => {
  const tree = renderer.create(<SingleCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
