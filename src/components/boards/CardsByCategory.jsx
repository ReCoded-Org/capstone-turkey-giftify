import React from "react";
import "./Board.css";
import { VscArrowRight } from "react-icons/vsc";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductByCategory({
  allProducts,
  selectedItems,
  setSingleCard,
  setItemsDetails,
}) {
  return (
    <Container>
      <div className="row cards">
        {allProducts.filter((type) => type.productType.includes(selectedItems))
          .map((filteredItem, index) => {
            return (
              <div key={index} className="oneCard col-3">
                <img
                  className="itemImage"
                  src={filteredItem.productImage}
                  alt={filteredItem.productName}
                />
                <p>
                  <b>{filteredItem.productName}</b>
                </p>
                <Link to="/productDetails">
                  <p
                    onClick={() => {
                      setItemsDetails(filteredItem);
                    }}
                  >
                    See Details <VscArrowRight />{" "}
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export default ProductByCategory;
