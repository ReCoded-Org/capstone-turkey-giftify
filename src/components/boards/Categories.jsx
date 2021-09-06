import React from "react";
import "./Board.css";
import CardsByCategory from "./CardsByCategory";

function Categories({
  allCategories,
  setSelectedItems,
  allProducts,
  selectedItems,
  setSingleCard,
  setItemsDetails,
}) {
  return (
    
    allCategories.map((product, index) => {
    return (
      <div key={index} className="categories">
        <button
          key={index}
          className={`oneCategory ${product}`}
          onClick={(event) => {
            event.preventDefault();
            setSelectedItems(product);
          }}
        >
          {product}
        </button>
        {product === selectedItems ? (
          <CardsByCategory
            allProducts={allProducts}
            selectedItems={selectedItems}
            setSingleCard={setSingleCard}
            setItemsDetails={setItemsDetails}
          />
        ) : null}
      </div>
    );
  })
  );
}

export default Categories;
