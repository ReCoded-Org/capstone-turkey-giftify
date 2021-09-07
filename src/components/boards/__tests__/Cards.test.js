import React from "react";
import Cards from "../Cards";
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

const allCategories = ["book", "clothing"];

const testSearchValue = "";

it("Cards rendered correctly", () => {
  const tree = renderer
    .create(
      <Cards
        allProducts={allProducts}
        allCategories={allCategories}
        testSearchValue={testSearchValue}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
