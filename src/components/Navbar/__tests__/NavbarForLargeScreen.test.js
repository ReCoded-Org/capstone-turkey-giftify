import React from "react";
import NavbarForLargeScreen from "./../NavbarForLargeScreen";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

it("NavbarForLargeScreen rendered correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavbarForLargeScreen />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
