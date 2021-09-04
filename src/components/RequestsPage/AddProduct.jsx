import React, { useState, useEffect } from "react";
import db from "./../../firebase";
import "./AddProduct.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  // eslint-disable-next-line
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
    <div className="addProductMainDiv">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Product's Image:</span>
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Product's Name:</span>
          <input
            type="text"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
        </label>
        <label>
          <span>Product's Category:</span>
          <select value={productCategory.value} onChange={handleChange}>
            {categoriesName.map((info) => {
              return (
                <option key={info.id} value={info.id}>
                  {info.id.charAt(0).toUpperCase() + info.id.slice(1)}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Product's Short Brief:</span>
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            style={{ resize: "vertical" }}
            value={description}
          />
        </label>
        <label>
          <span>Product's Condition:</span>
          <input
            type="text"
            onChange={(e) => setCondition(e.target.value)}
            value={condition}
          />
        </label>
        <div className="buttonDivAddProduct">
          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
