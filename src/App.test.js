import React from "react";
import { Provider } from "react-redux";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import store from "./redux/store";
import App from "./App";

afterEach(cleanup);

it("App rendered correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
