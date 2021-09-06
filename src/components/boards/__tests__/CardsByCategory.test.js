import React from "react";
import CardsByCategory from "../CardsByCategory";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

const allProducts = [
  {
    productName: "",
    ProductDescription: "",
    itemCondition: "",
    productType: "",
    productImage: "",
  },
  {
    productName: "",
    ProductDescription: "",
    itemCondition: "",
    productType: "",
    productImage: "",
  },
];

it("CardsByCategory rendered correctly", () => {
  const tree = renderer
    .create(<CardsByCategory allProducts={allProducts} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
