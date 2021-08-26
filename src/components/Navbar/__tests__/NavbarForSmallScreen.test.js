import React from "react";
import NavbarForSmallScreen from "./../NavbarForSmallScreen";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

it("NavbarForSmallScreen rendered correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavbarForSmallScreen />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
