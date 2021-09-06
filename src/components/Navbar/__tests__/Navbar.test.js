import React from "react";
import { Provider } from "react-redux";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import Navbar from "../Navbar";

afterEach(cleanup);

it("Navbar rendered correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
