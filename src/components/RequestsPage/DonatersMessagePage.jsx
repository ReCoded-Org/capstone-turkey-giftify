import React, { useState, useEffect } from "react";
import "./DonatersMessagePage.css";
import { useParams, useHistory } from "react-router-dom";
import db from "./../../firebase";
import { Gear, XCircle } from "react-bootstrap-icons";

const DonatersMessagePage = () => {
  const { category, id } = useParams();
  const [usersMessages, setUsersMessages] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  let categoriesName = [];
  const history = useHistory();

  const categoryWord = category.charAt(0).toUpperCase() + category.slice(1);

  const getRequestsMessage = async () => {
    const categoriesPath = db.collection("categories");
    await categoriesPath.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        categoriesName.push(doc.id);
        categoriesName.map((category) => {
          return categoriesPath
            .doc(`${category}`)
            .collection("items")
            .doc(`${id}`)
            .collection("requests")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                setUsersMessages((prevState) => {
                  return {
                    ...prevState,
                    [doc.id]: [doc.data().reason, doc.data().userId],
                  };
                });
              });
            });
        });
      });
    });
  };

  const getProductDetails = async () => {
    const categoriesPath = db.collection("categories");
    return categoriesPath
      .doc(`${category}`)
      .collection("items")
      .doc(`${id}`)
      .get()
      .then((doc) => {
        setProductDetails((prevState) => {
          return {
            ...prevState,
            [doc.id]: [
              doc.data().itemName,
              doc.data().image,
              doc.data().description,
              doc.data().condition,
            ],
          };
        });
      });
  };

  const editProductImage = async () => {
    const editedProductImage = prompt("Product's Image URL: ");
    await db
      .collection("categories")
      .doc(`${category}`)
      .collection("items")
      .doc(`${id}`)
      .update({
        image: editedProductImage,
      })
      .then(getProductDetails());
  };

  const editProductName = async () => {
    const editedProductName = prompt("Product's name: ");
    await db
      .collection("categories")
      .doc(`${category}`)
      .collection("items")
      .doc(`${id}`)
      .update({
        itemName: editedProductName,
      })
      .then(getProductDetails());
  };

  const editProductCondition = async () => {
    const editedProductCondition = prompt("Product's condition: ");
    await db
      .collection("categories")
      .doc(`${category}`)
      .collection("items")
      .doc(`${id}`)
      .update({
        condition: editedProductCondition,
      })
      .then(getProductDetails());
  };

  const editProductShortBrief = async () => {
    const editedProductShortBrief = prompt("Product's short brief: ");
    await db
      .collection("categories")
      .doc(`${category}`)
      .collection("items")
      .doc(`${id}`)
      .update({
        description: editedProductShortBrief,
      })
      .then(getProductDetails());
  };

  const removeProduct = () => {
    db.collection("categories")
      .doc(`${category}`)
      .collection("items")
      .doc(`${id}`)
      .delete()
      .then(history.push("/requestsPage"));
  };

  useEffect(() => {
    getRequestsMessage();
    getProductDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="donatersMessageContainer">
      <div className="mainProductDetails">
        {Object.values(productDetails).map((info) => (
          <div key={Object.keys(productDetails)} className="productDetails">
            <div className="productDetailsImage">
              <Gear onClick={editProductImage} style={{ marginBottom: "3%" }} />
              <img src={info[1]} alt={info[0]} />
            </div>
            <div className="productDetailsText">
              <div className="productDetailsParentDiv">
                <div className="productDetailsChildDiv">
                  <span>Product Name</span>
                  <Gear onClick={editProductName} />
                </div>
                <p>{info[0]}</p>
              </div>
              <div className="productDetailsParentDiv">
                <div className="productDetailsChildDiv">
                  <span>Product’s Condition</span>
                  <Gear onClick={editProductCondition} />
                </div>
                <p>{info[3].charAt(0).toUpperCase() + info[3].slice(1)}</p>
              </div>
              <div className="productDetailsParentDiv">
                <div className="productDetailsChildDiv">
                  <span>Product Type</span>
                </div>
                <p>{categoryWord}</p>
              </div>
              <div className="productDetailsParentDiv">
                <div className="productDetailsChildDiv">
                  <span>Product’s Short Brief</span>
                  <Gear onClick={editProductShortBrief} />
                </div>
                <p>{info[2]}</p>
              </div>
              <div className="productDeleteParentDiv">
                <div className="productDetailsChildDiv productDeleteChildDiv">
                  <span>Delete Product</span>
                </div>
                <XCircle onClick={removeProduct} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="messageArea">
        {Object.values(usersMessages).map((info) => (
          <div key={info[1]} className="donatersMessageText">
            <span>User ID: {info[1]}</span>
            <p>{info[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonatersMessagePage;
