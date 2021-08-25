import React, { useState } from "react";
import Cards from "../Cards/Cards";
import "./Board.css";
import { VscArrowRight } from "react-icons/vsc";

function Boards({ allItems, testSearchValue }) {
  const [selectedItems, setSelectedItems] = useState("");

  //  filter Cards by category
  const items = Object.keys(allItems)
    .filter((type) => type.includes(selectedItems))
    .map((item, index) => {
      return (
        <div key={index} className="cards">
          {allItems[item].map((info) => {
            return (
              <div key={index} className="oneCard">
                <img
                  className="itemImage"
                  src={info.image}
                  alt={info.itemName}
                />
                <p>
                  <b>{info.itemName}</b>
                </p>
                <a href="/link">
                  See Details <VscArrowRight />{" "}
                </a>
              </div>
            );
          })}
        </div>
      );
    });

  // Categories
  const category = Object.keys(allItems).map((categ, index) => {
    return (
      <div key={index} className="categories">
        <button
          id="oneCategory"
          className={categ}
          onClick={(event) => {
            event.preventDefault();
            setSelectedItems(categ);
          }}
          key={index}
        >
          {categ}
        </button>
        {categ === selectedItems ? items : null}
      </div>
    );
  });

  // Filter Cards by search
  const cardsBySearch = Object.keys(allItems)
    .filter((value) => {
      if (testSearchValue === "") {
        return null;
      } else if (value.toLowerCase().includes(testSearchValue.toLowerCase())) {
        return allItems[value];
      } else {
        return null;
      }
    })
    .map((item, index) => {
      return (
        <div key={index} className="cards">
          {allItems[item]
            .filter((value) => {
              if (testSearchValue === "") {
                return null;
              } else if (
                value.itemName
                  .toLowerCase()
                  .includes(testSearchValue.toLowerCase())
              ) {
                return value;
              } else if (
                value.condition
                  .toLowerCase()
                  .includes(testSearchValue.toLowerCase())
              ) {
                return value;
              } else {
                return value;
              }
            })
            .map((info) => {
              return (
                <div key={index} className="oneCard">
                  <img
                    className="itemImage"
                    src={info.image}
                    alt={info.itemName}
                  />
                  <p>
                    <b>{info.itemName}</b>
                  </p>
                  <a href="#link">
                    See Details <VscArrowRight />{" "}
                  </a>
                </div>
              );
            })}
        </div>
      );
    });

  return (
    <div>
      <Cards category={category} cardsBySearch={cardsBySearch} />
    </div>
  );
}

export default Boards;
