import React from "react";
import SingleCard from "../SingleCard/SingleCard";

function Cards({ category, cardsBySearch, singleCard, itemsDetails}) {
  return (
    <div>
    {singleCard === true ? <SingleCard itemsDetails={itemsDetails}/> : 
        <div>  {cardsBySearch} {category} </div>     
    }
    </div>
  );
}

export default Cards;
