import React from "react";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import NavbarForLargeScreen from "../NavbarForLargeScreen";

afterEach(cleanup);

it("NavbarForLargeScreen rendered correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <NavbarForLargeScreen />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
