import React from "react";
import "./Board.css";
import { VscArrowRight } from "react-icons/vsc";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardsBySearch({ allProducts, setItemsDetails, testSearchValue }) {
  return (
    <Container>
      <div className="row cards">
        {allProducts
          .filter((product) => {
            if (testSearchValue === "") {
              return null;
            } else if (
              product.productType
                .toLowerCase()
                .includes(testSearchValue.toLowerCase())
            ) {
              return product;
            } else if (
              product.productName
                .toLowerCase()
                .includes(testSearchValue.toLowerCase())
            ) {
              return product;
            } else if (
              product.ProductDescription.toLowerCase().includes(
                testSearchValue.toLowerCase()
              )
            ) {
              return product;
            } else if (
              product.itemCondition
                .toLowerCase()
                .includes(testSearchValue.toLowerCase())
            ) {
              return product;
            } else {
              return null;
            }
          })
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

export default CardsBySearch;
