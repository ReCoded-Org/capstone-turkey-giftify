import React, { useState } from "react";
import Cards from "./Cards";
import "./Board.css";

function Boards({ allItems, testSearchValue, setSingleCard, singleCard }) {
  const [selectedItems, setSelectedItems] = useState("");
  const [itemsDetails, setItemsDetails] = useState({});

  const allCategories = [];
  const allProducts = [];

  // All Products and Categories in the database
  Object.keys(allItems).map((item) => {
    allCategories.push(item);
    return allItems[item].map((info) => {
      return allProducts.push({
        productName: info.itemName,
        productImage: info.image,
        productType: item,
        ProductDescription: info.description,
        itemCondition: info.condition,
        itemDocID: info.itemDocID,
      });
    });
  });

  return (
    <div>
      {
        <Cards
          itemsDetails={itemsDetails}
          allCategories={allCategories}
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems}
          singleCard={singleCard}
          allProducts={allProducts}
          setSingleCard={setSingleCard}
          setItemsDetails={setItemsDetails}
          testSearchValue={testSearchValue}
        />
      }
    </div>
  );
}

export default Boards;
