import React from "react";
import RequestsPage from "./../RequestsPage";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

it("RequestsPage rendered correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <RequestsPage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
