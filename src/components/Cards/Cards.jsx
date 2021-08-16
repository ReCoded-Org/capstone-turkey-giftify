import React from "react";

function Cards ({category, items, cardsBySearch}){

    return (
        <div>
            {category}

            {items}

            {cardsBySearch}
        </div>
    )
}

export default Cards