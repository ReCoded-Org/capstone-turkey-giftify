import React from "react";
import CardsBySearch from "../CardsBySearch";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

const allProducts = [
  {
    productName: "bag",
    ProductDescription: "hand bag",
    itemCondition: "good",
    productType: "clothing",
    productImage: "image",
  },
  {
    productName: "book",
    ProductDescription: "turkish",
    itemCondition: "good",
    productType: "book",
    productImage: "image",
  },
];

const testSearchValue = "";

it("CardsBySearch rendered correctly", () => {
  const tree = renderer
    .create(
      <CardsBySearch
        allProducts={allProducts}
        testSearchValue={testSearchValue}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
