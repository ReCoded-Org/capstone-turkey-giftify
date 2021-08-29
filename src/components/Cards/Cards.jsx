import React from "react";
import SingleCard from "../SingleCard/SingleCard";

function Cards({ category, cardsBySearch, singleCard, itemsDetails }) {
  return (
    <div>
      {singleCard === true ? (
                
        <div>
        {cardsBySearch}
        <SingleCard cardsBySearch={cardsBySearch} itemsDetails={itemsDetails} />
        </div>

      ) : (
        <div>
          {" "}
          {cardsBySearch} {category}{" "}
        </div>
      )}
    </div>
  );
}

export default Cards;
