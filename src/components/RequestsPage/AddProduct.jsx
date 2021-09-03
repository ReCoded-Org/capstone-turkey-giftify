import React, { useState, useEffect } from "react";
import db from "./../../firebase";
import "./AddProduct.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [userID, setUserID] = useState("2");
  const [itemName, setItemName] = useState("");
  const [productCategory, setProductCategory] = useState({ value: "books" });
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("");
  const [categoriesName, setCategoriesName] = useState([]);
  const history = useHistory();

  const getCategories = async () => {
    const collection = await db.collection("categories").get();
    const arrayOfDocs = collection.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setCategoriesName(arrayOfDocs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("categories")
      .doc(productCategory.value)
      .collection("items")
      .add({
        userID,
        itemName,
        description,
        condition,
        image,
      })
      .then(history.push("/requestsPage"));
  };

  const handleChange = (e) => {
    setProductCategory({ value: e.target.value });
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product's Name:
          <input
            type="text"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
        </label>
        <label>
          Product's Category:
          <select value={productCategory.value} onChange={handleChange}>
            {categoriesName.map((anObjectMapped) => {
              return (
                <option key={anObjectMapped.id} value={anObjectMapped.id}>
                  {anObjectMapped.id}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Product's Short Brief:
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label>
          Product's Condition:
          <input
            type="text"
            onChange={(e) => setCondition(e.target.value)}
            value={condition}
          />
        </label>
        <label>
          Product's Image:
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
