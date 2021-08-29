import React, { useState, useEffect } from "react";
import "./Donations.css";
import Card from "react-bootstrap/Card";
import { BsArrowRight } from "react-icons/bs";
import db from "../../firebase";
import Dropdown from "react-bootstrap/Dropdown";
import { BsPlusCircle } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

//fetch database for donations - DONE
//render add product button, which redirects to add product card - DONE
//render the donations in cards - DONE
//add new products to database via add product card
//fetch categories for dropdown menu

function Donations() {
  const [donations, setDonations] = useState(false);

  //to switch between add form and product rendering
  function handleClick() {
    setDonations((donations) => !donations);
  }

  //fetch database
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, {});

  const fetchItems = async () => {
    // getting categories
    const categories = (await db.collection("categories").get()).docs;

    // to store
    const myItems = [];

    // loop
    const promises = categories.map(async (cat) => {
      const response = cat.ref.collection("items");
      const data = await response.get();

      data.docs.forEach((item) => {
        myItems.push({
          id: item.id,
          categoryID: cat.id,
          ...item.data(),
        });
      });
    });

    await Promise.all(promises);
    console.log("items", myItems);

    setItems(myItems);
  };

  //states to set old data to new data

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  // eslint-disable-next-line
  const sub = (e) => {
    e.preventDefault();

    db.collection("categories")
      .doc()
      .collection("items")
      .doc()
      .add({
        itemName: name,
        description: description,
        image: image,
        condition: condition,
        //but category is at a higher file location?
        category: category,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  //func to add product to db
  function handleSubmit() {
    console.log("Data Submitted");
  }

  function DonationForm() {
    return (
      <div className="formDiv">
        <form className="addForm" onSubmit={handleSubmit}>
          <div className="leftSection">
            <label className="label">Images</label>
            <input
              className="picInput"
              type="file"
              className="primaryPic"
              onSubmit={(e) => {
                setImage(e.target.value);
              }}
            ></input>
          </div>
          <div className="rightSection">
            <label className="label">Product Name</label>
            <input
              className="textInput"
              type="text"
              onSubmit={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <label className="label">Product Description</label>
            <input
              className="textInput"
              type="text"
              onSubmit={(e) => {
                setDescription(e.target.value);
              }}
            ></input>

            <Dropdown>
              <Dropdown.Toggle className="label">Product Type</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button
              className="addCardBtn"
              onClick={handleClick}
              onSubmit={(e) => {
                setCategory(e.target.value);
              }}
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    );
  }

  function DonatedProducts() {
    return (
      <div className="donationsPage">
        <button
          className="addCard"
          onClick={handleClick}
          style={{ width: "18rem" }}
        >
          <BsPlusCircle className="plusIcon addBtn" />
        </button>

        {items.map((singleItem) => {
          return (
            <div>
              <Card className="itemCard cards">
                <div className="upperIcons">
                  <BsXCircle className="toLeft" />
                  <BsGear className="toRight" />
                </div>
                <Card.Img
                  className="itemImage"
                  variant="top"
                  src={singleItem.image}
                  alt={singleItem.itemName}
                />
                <Card.Body>
                  <Card.Title className="productName">
                    {singleItem.itemName}
                  </Card.Title>
                  <a
                    href="https://react-bootstrap.github.io/components/cards/"
                    className="productLink"
                  >
                    See Details <BsArrowRight />
                  </a>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        {/* second map was here */}
      </div>
    );
  }

  if (donations === true) {
    return <DonationForm />;
  }
  return <DonatedProducts />;
}

export default Donations;
