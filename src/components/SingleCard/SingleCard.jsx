import React, { useState, useEffect } from "react";
import "./SingleCard.css";
import db from "../../firebase";

function SingleCard({ itemsDetails }) {
  const [inputUserMassge, setInputUserMassge] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [userId, setUserId] = useState("2");

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("categories")
      .doc(itemsDetails.productType)
      .collection("items")
      .doc(itemsDetails.ItemDocID)
      .collection("requests")
      .add({
        userId: userId,
        readon: inputUserMassge,
      })
      .then(() => {
        setInputUserMassge("");
      })
      .then(() => {
        alert("Your message has been successfully sended");
      });
  };

  useEffect(() => {
    const getData = () => {
      db.collection("categories")
        .doc(itemsDetails.productType)
        .collection("items")
        .onSnapshot(function (querySnapshot) {
          setUserComments(
            querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              userId: doc.data().userId,
              readon: doc.data().readon,
            }))
          );
        });
        
    };
    getData();
  }, [itemsDetails.productType]);

  return (
    <div className="productCard">
      <div>
        <img
          className="productImage"
          src={itemsDetails.productImage}
          alt={itemsDetails.productName}
        />
      </div>
      <div className="pruductDetails">
        <h5>Product Name</h5>
        <p>{itemsDetails.productName}</p>
        <h5>Product Type</h5>
        <p>{itemsDetails.productType}</p>
        <h5>Product’s Short Brief</h5>
        <p>{itemsDetails.ProductDescription}</p>
        <h5>Product Condition</h5>
        <p>{itemsDetails.ItemCondition}</p>
        <form onSubmit={handleSubmit}>
          <label>
            <h5>Why do you need?</h5>
             <textarea
                className="message"
                type="message"
                name="name"
                data-gramm_editor="false"
                value={inputUserMassge}
                onChange ={(e) => setInputUserMassge(e.target.value)}
              />
          </label>
          <br/>
          <input className = "submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default SingleCard;
