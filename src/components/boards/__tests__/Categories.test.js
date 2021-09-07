import React from "react";
import Categories from "../Categories";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

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

it("Categories rendered correctly", () => {
  const tree = renderer
    .create(
      <Categories allProducts={allProducts} allCategories={allCategories} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
