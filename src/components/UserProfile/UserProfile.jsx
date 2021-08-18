import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import db from "../../firebase";

function UserProfile() {
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    const response = db.collection("users");
    const data = await response.get();
    data.docs.forEach((item) => {
      setUser([...user, item.data()]);
    });
  };
  useEffect(() => {
    fetchUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //edit button will be functional

  return (
    <div className="profileRender">
      {user &&
        user.map((singleUser) => {
          return (
            <div className="profilePage">
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
                <button>Edit</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default UserProfile;
