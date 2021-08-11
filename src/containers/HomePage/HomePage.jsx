import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import HomePageItems from "../../components/HomePageItems/HomePageItems";
import "./HomePage.css";
import db from "../../firebase";

// After deciding on the database structure,the example array should be deleted and
//  replaced with a function that reads from firebase, takes 8 items by random
// and passes it to HomePageItems as a prop

function HomePage() {
  const [dbItems, setDbItems] = useState([]);

  useEffect(() => {
    db.collection("homePageItems")
      .get()
      .then(
        (querySnapshot) => {
          const itemList = [];
          querySnapshot.forEach((doc) => {
            itemList.push({ ...doc.data() });
          });
          setDbItems(itemList);
        },
        (error) => console.log(error)
      );
  }, []);

  return (
    <Container>
      <HomePageItems dbItems={dbItems} />
    </Container>
  );
}

export default HomePage;
