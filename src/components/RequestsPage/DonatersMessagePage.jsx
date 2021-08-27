import React, { useState, useEffect } from "react";
import "./DonatersMessagePage.css";
import { useParams } from "react-router-dom";
import db from "./../../firebase";

const DonatersMessagePage = () => {
  const { category, id } = useParams();
  const [usersMessages, setUsersMessages] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  let categoriesName = [];

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
            ],
          };
        });
      });
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
              <img src={info[1]} alt={info[0]} />
            </div>
            <div className="productDetailsText">
              <span>Product Name</span>
              <p>{info[0]}</p>
              <span>Product Type</span>
              <p>{categoryWord}</p>
              <span>Product’s Short Brief</span>
              <p>{info[2]}</p>
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
