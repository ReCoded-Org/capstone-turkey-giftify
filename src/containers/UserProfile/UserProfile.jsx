import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import db from "../../firebase";
//import { getAuth, onAuthStateChanged } from "firebase/auth";

function UserProfile() {
  const [edit, setEdit] = useState(false);

  function handleClick() {
    setEdit((edit) => !edit);
  }

  //to get logged in user data
  /*
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

  //to update profile info
  updateProfile(auth.currentUser, {
  displayFirstName: {setName}, displayLastName: {setLastName}, email: {setEmail}, city: {setCity} photoURL: {setPic}
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
*/

  //needs work
  function handleSubmit() {
    console.log("Data Edited");
  }

  /*
    const [user, setUser] = useState({
    firstName: name,
    lastName: lastName,
    city: city,
    email: email,
    photoURL: pic,});
    */

  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = db.collection("users");
    const data = await response.get();
    data.docs.forEach((item) => {
      setUser([...user, { id: item.id, ...item.data() }]);
    });
  };

  //to fetch data from db
  useEffect(() => {
    fetchUser();
  }, []);

  //func to render existing user data
  function Card() {
    return (
      <div className="profileRender">
        {user &&
          user.map((singleUser) => {
            return (
              <div key={singleUser.id} className="profilePage">
                <div className="profilePic">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    alt="profilePic"
                  />
                </div>
                <div className="texts">
                  <h2>
                    {singleUser.firstName} {singleUser.lastName}
                  </h2>
                  <p>{singleUser.email}</p>
                  <p>{singleUser.city}</p>
                </div>
                <div className="editBtn">
                  <button onClick={handleClick}>Edit</button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
  //func to update data on firebase-not complete
  function Form() {
    return (
      <div className="profileRender">
        <div className="profilePage">
          <form onSubmit={handleSubmit}>
            <div className="profilePage">
              <input type="file" className="profilePicEntry" />
            </div>
            <div className="texts">
              <div>
                <label className="importantText">
                  First Name
                  <input type="text" />
                </label>
              </div>
              <div>
                <label className="importantText">
                  Last Name
                  <input type="text" />
                </label>
              </div>
              <div>
                <label className="regularText">
                  E-Mail
                  <input type="email" />
                </label>
              </div>
              <div>
                <label className="regularText">
                  City
                  <input type="text" />
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
