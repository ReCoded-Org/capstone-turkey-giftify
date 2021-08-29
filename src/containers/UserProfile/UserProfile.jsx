import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import db from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function UserProfile() {
  const [edit, setEdit] = useState(false);

  function handleClick() {
    setEdit((edit) => !edit);
  }

  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayFirstName = user.firstName;
    const displayLastName = user.lastName;
    const email = user.email;
    const city = user.city;
    const photoURL = user.photoURL;
    //const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

  //needs work
  function handleSubmit() {
    console.log("Data Edited");
  }

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pic, setPic] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const sub = (e) => {
    e.preventDefault();

    // Add data to the store
    db.collection("users")
      .set({
        firstName: name,
        lastName: lastName,
        city: city,
        email: email,
        photoURL: pic,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  {
    /*const [user, setUser] = useState({
    firstName: name,
    lastName: lastName,
    city: city,
    email: email,
    photoURL: pic,});*/
  }

  const fetchUser = async () => {
    const response = db.collection("users").doc();
    const data = await response.get();
    data.docs.forEach((item) => {
      setUser([...user, { id: item.id, ...item.data() }]);
    });
  };

  //to fetch data from db
  useEffect(() => {
    fetchUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //func to render existing user data
  function Card() {
    return (
      <div className="profileRender">
        <div key={user.id} className="profilePage">
          <div className="profilePic">
            <img src={user.photoURL} alt="profilePic" />
          </div>
          <div className="texts">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
            <p>{user.city}</p>
          </div>
          <div className="editBtn">
            <button onClick={handleClick}>Edit</button>
          </div>
        </div>
      </div>
    );
  }
  //func to update data on firebase-not complete
  function Form() {
    return (
      <div className="profileRender">
        <div className="profilePage">
          <form
            onSubmit={handleSubmit}
            onSubmit={(event) => {
              sub(event);
            }}
          >
            <div className="profilePage">
              <input type="file" className="profilePicEntry" />
            </div>
            <div className="texts">
              <div>
                <label className="importantText">
                  First Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div>
                <label className="importantText">
                  Last Name
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div>
                <label className="regularText">
                  E-Mail
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div>
                <label className="regularText">
                  City
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
            <div>
              <button className="submitBtn" onClick={handleClick}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (edit === true) {
    return <Form />;
  }
  return <Card />;
}

export default UserProfile;
