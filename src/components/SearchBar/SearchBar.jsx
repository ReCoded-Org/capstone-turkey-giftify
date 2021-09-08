import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import db from "../../firebase";
import Boards from "../boards/Boards";

function SearchSection() {
  const [allItems, setAllItems] = useState([]);
  const [input, setInput] = useState("");
  const [testSearchValue, setTestSearchValue] = useState("");
  const [singleCard, setSingleCard] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        db.collection("categories")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              let docRef = db
                .collection("categories")
                .doc(doc.id)
                .collection("items");
              const itemData = [];
              const nArray = [];

              docRef.get().then((querySnapshot) => {
                querySnapshot.forEach((item) => {
                  nArray.push(item.id);
                  const object = item.data();
                  object["itemDocID"] = item.id;
                  itemData.push(object);

                  setAllItems((prevState) => {
                    return {
                      ...prevState,
                      [doc.id]: itemData,
                    };
                  });
                });
              });
            });
          });
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTestSearchValue(input);
    setSingleCard(false);
    setInput("");
  }

  return (
    <div>
      <h2 className="parag">Or would you like to search for yourself ?</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input
            className="searchBar"
            type="text"
            name="name"
            onChange={handleChange}
            value={input}
          />
        </label>
        <input className="Search" type="submit" value="Search" />
      </form>

      <Boards
        allItems={allItems}
        input={input}
        testSearchValue={testSearchValue}
        singleCard={singleCard}
        setSingleCard={setSingleCard}
      />
    </div>
  );
}

export default SearchSection;
