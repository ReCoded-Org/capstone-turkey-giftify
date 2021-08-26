import React from "react";
import Navbar from "./../Navbar";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

it("Navbar rendered correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
