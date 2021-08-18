import React from "react";

function Cards({ category, cardsBySearch }) {
  return (
    <div>
      {cardsBySearch}
      {category}
    </div>
  );
}

export default Cards;