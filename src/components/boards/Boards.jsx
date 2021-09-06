import React, { useState } from "react";
import Cards from "./Cards";
import "./Board.css";

function Boards({ allItems, testSearchValue, setSingleCard }) {
  const [selectedItems, setSelectedItems] = useState("");
  const [itemsDetails, setItemsDetails] = useState({});

  const allProducts = [];
  const allCategories = [];

  Object.keys(allItems).map((item) => {
    allCategories.push(item);
    return allItems[item].map((info) => {
      return allProducts.push({
        productName: info.itemName,
        ProductDescription: info.description,
        itemCondition: info.condition,
        productType: item,
        productImage: info.image,
        itemDocID: info.itemDocID
      });
    });
  });

  return (
    <div>
      <Cards
        allProducts={allProducts}
        allCategories={allCategories}
        testSearchValue={testSearchValue}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        setSingleCard={setSingleCard}
        itemsDetails={itemsDetails}
        setItemsDetails={setItemsDetails}
      />
    </div>
  );
}

export default Boards;
