import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import db from "../../firebase";

function UserProfile() {
  // eslint-disable-next-line
  const [edit, setEdit] = useState(false);

  function handleClick() {
    console.log("tıkladım :D");
    setEdit((edit) => !edit);
  }

  function handleSubmit() {
    console.log("Data Edited");
  }

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  //conditional rendering

  if (edit === true) {
    return <Form />;
  }
  return <Card />;
}

export default UserProfile;
