import React, { useState, useEffect } from "react";
import db from "./../../firebase";
import { Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./RequestsPage.css"

const RequestsPage = () => {
  // need redux
  // hangi user loggedin
  // eslint-disable-next-line
  const [userId, setUserId] = useState("2");
  const [usersProducts, setUsersProducts] = useState([]);
  let categoriesName = [];

  const getElements = async () => {
    const categoriesPath = db.collection("categories");
    await categoriesPath.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        categoriesName.push(doc.id);
        categoriesName.map((category) => {
          return categoriesPath
            .doc(`${category}`)
            .collection("items")
            .where("userID", "==", userId)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                setUsersProducts((prevState) => {
                  return {
                    ...prevState,
                    [doc.id]: [doc.data().itemName, doc.data().image, doc.id],
                  };
                });
              });
            });
        });
      });
    });
  };

  useEffect(() => {
    getElements();
    // eslint-disable-next-line
  }, []);

  console.log("usersProducts: ", usersProducts);

  return (
    <div className="requstsPageContainer">
      {Object.values(usersProducts).map((info) => (
        <Card key={info[0]} className="cardInRequestPage">
          <Card.Img variant="top" src={info[1]} />
          <Card.Body className="CardUpperPart">
            <Card.Title>{info[0]}</Card.Title>
            <Card.Link>
              <Link to={`/donatersMessagePage/${info[2]}`}>See Details <ArrowRight /></Link>
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RequestsPage;
