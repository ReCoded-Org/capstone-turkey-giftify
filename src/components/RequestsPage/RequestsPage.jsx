import React, { useState, useEffect } from "react";
import db from "./../../firebase";
import { Card } from "react-bootstrap";
import { ArrowRight, PlusCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./RequestsPage.css";

const RequestsPage = () => {
  // need redux for which user loggedin, now waiting Deniz
  // line 11 going to remove
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
                    [doc.id]: [
                      doc.data().itemName,
                      doc.data().image,
                      doc.id,
                      category,
                    ],
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

  return (
    <div className="requstsPageContainer">
      <Card className="cardInRequestPage">
        <Card.Body className="CardUpperPart addProductImg">
          <Card.Link as={Link} to="addProduct">
            <PlusCircle />
          </Card.Link>
        </Card.Body>
      </Card>
      {Object.values(usersProducts).map((info) => (
        <Card key={info[0]} className="cardInRequestPage">
          <Card.Img variant="top" src={info[1]} />
          <Card.Body className="CardUpperPart">
            <Card.Title>{info[0]}</Card.Title>
            <Card.Link
              as={Link}
              to={`/donatersMessagePage/${info[3]}/${info[2]}`}
            >
              <span>
                See Details <ArrowRight />
              </span>
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RequestsPage;
