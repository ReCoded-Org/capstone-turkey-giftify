import React from "react";
import SingleCard from "../SingleCard/SingleCard";

function Cards({
  cardBySelectedCategory,
  cardsBySearch,
  singleCard,
  itemsDetails,
}) {
  return (
    <div>
      {singleCard === true ? (
        <div>
          {cardsBySearch}
          <SingleCard
            cardsBySearch={cardsBySearch}
            itemsDetails={itemsDetails}
          />
        </div>
      ) : (
        <div>
          {" "}
          {cardsBySearch} {cardBySelectedCategory}{" "}
        </div>
      )}
    </div>
  );
}

export default Cards;
