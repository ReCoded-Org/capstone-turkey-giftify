import React from "react";
import ScrollToTop from "../ScrollToTop";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

// afterEach(cleanup);

it("Smooth Scrolling rendered correctly", () => {
  window.scrollTo = jest.fn();
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
});
