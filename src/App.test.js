import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Giftify Image", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/long name/i);
  expect(linkElement).toBeInTheDocument();
});
