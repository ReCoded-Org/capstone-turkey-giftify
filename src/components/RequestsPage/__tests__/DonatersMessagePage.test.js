import React from "react";
import DonatersMessagePage from "./../DonatersMessagePage";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest
    .fn()
    .mockReturnValue({ category: "clothing", id: "3iz39LBgqzm67DAOhPy1" }),
}));

it("DonatersMessagePage rendered correctly", () => {
  const tree = renderer.create(<DonatersMessagePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
