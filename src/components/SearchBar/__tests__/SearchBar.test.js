import React from "react";
import SearchBar from "./../SearchBar";
import renderer from "react-test-renderer";


it("renders searchBar correctly", () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
