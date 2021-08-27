import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./DonatersMessagePage.css";
import { useParams } from "react-router";
import db from "./../../firebase";

const DonatersMessagePage = () => {
  const { id } = useParams();

  const [usersMessages, setUsersMessages] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  let categoriesName = [];

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
                console.log("docc: ", doc.data());
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
      categoriesName.map((category) => {
        return categoriesPath
        // use category
          .doc(`${category}`)
          .collection("items")
          .doc(`${id}`)
          .get()
          .then((querySnapshot) => {
            console.log("querySnapshot.data(): ", querySnapshot.data());
            setProductDetails(querySnapshot.data());
          });
      });
  };

  console.log("usersMessages: ", usersMessages);
  console.log("productDetails: ", productDetails);

  useEffect(() => {
    getRequestsMessage();
    getProductDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="donatersMessageContainer">
      <div className="mainProductDetails">
        <p>SADECE CIGLIK ATIYORUM ARTIK</p>
        {/* returns undefined state and after an action call returns the state correctly */}
        {/* {Object.values(productDetails).map((info) => (
                    <Card key={info}>

                    </Card>
                ))} */}
      </div>
      <div className="messageArea">
        {Object.values(usersMessages).map((info) => (
          <div className="donatersMessageText">
            <span>User ID: {info[1]}</span>
            <p>{info[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonatersMessagePage;
