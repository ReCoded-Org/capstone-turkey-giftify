import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import CardsBySearch from "../boards/CardsBySearch";
import Categories from "../boards/Categories";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Cards({
  allProducts,
  allCategories,
  singleCard,
  setSingleCard,
  itemsDetails,
  setItemsDetails,
  selectedItems,
  setSelectedItems,
  testSearchValue,
}) {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <CardsBySearch
            allProducts={allProducts}
            setSingleCard={setSingleCard}
            setItemsDetails={setItemsDetails}
            testSearchValue={testSearchValue}
          />

          <Categories
            allProducts={allProducts}
            allCategories={allCategories}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
            setSingleCard={setSingleCard}
            setItemsDetails={setItemsDetails}
          />
        </Route>

        <Route path="/productDetails">
          <SingleCard itemsDetails={itemsDetails} />
        </Route>
      </Router>
    </div>
  );
}

export default Cards;
