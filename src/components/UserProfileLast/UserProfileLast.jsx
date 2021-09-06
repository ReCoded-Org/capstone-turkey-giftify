import React, { useEffect, useState } from "react";
import "./UserProfileLast.css";
import db from "./../../firebase";
import { Gear } from "react-bootstrap-icons";

const UserProfileLast = () => {
  // eslint-disable-next-line
  const [userId, SetUserId] = useState("fIoIImalBCOZt9O7AcgrFMQrLOH3");
  const [userDetails, setUserDetails] = useState([]);

  const getUserDetails = async () => {
    await db
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        setUserDetails((prevState) => {
          return {
            ...prevState,
            [doc.id]: [
              doc.data().city,
              doc.data().firstName,
              doc.data().lastName,
              doc.data().photoURL,
              doc.data().email,
            ],
          };
        });
      });
  };

  const editUserName = async () => {
    const editedUserName = prompt("User's name: ");
    await db
      .collection("users")
      .doc(userId)
      .update({
        firstName: editedUserName,
      })
      .then(getUserDetails());
  };

  const editUserLastname = async () => {
    const editedUserLastame = prompt("User's lastname: ");
    await db
      .collection("users")
      .doc(userId)
      .update({
        lastName: editedUserLastame,
      })
      .then(getUserDetails());
  };

  const editUserCity = async () => {
    const editedUserCity = prompt("User's city: ");
    await db
      .collection("users")
      .doc(userId)
      .update({
        city: editedUserCity,
      })
      .then(getUserDetails());
  };

  const editUserMail = async () => {
    const editedUserMail = prompt("User's mail: ");
    await db
      .collection("users")
      .doc(userId)
      .update({
        email: editedUserMail,
      })
      .then(getUserDetails());
  };

  const editUserProfilePic = async () => {
    const editedUserPic = prompt("User's profile pic: ");
    await db
      .collection("users")
      .doc(userId)
      .update({
        photoURL: editedUserPic,
      })
      .then(getUserDetails());
  };

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="userProfileParentDiv">
      {Object.values(userDetails).map((info) => (
        <div className="userProfileDetailsMainDiv" key={info[4]}>
          <div className="userProfileDetailsParentProfilePicDiv">
            <Gear onClick={editUserProfilePic} />
            <img src={info[3]} alt={info[1]} />
          </div>

          <div className="userProfileDetailsParentDiv">
            <div className="userProfileDetailsChildDiv">
              <p>User's Name</p>
              <Gear onClick={editUserName} />
            </div>
            <p>{info[1]}</p>
          </div>

          <div className="userProfileDetailsParentDiv">
            <div className="userProfileDetailsChildDiv">
              <p>User's Lastname</p>
              <Gear onClick={editUserLastname} />
            </div>
            <p>{info[2]}</p>
          </div>

          <div className="userProfileDetailsParentDiv">
            <div className="userProfileDetailsChildDiv">
              <p>User's City</p>
              <Gear onClick={editUserCity} />
            </div>
            <p>{info[0]}</p>
          </div>

          <div className="userProfileDetailsParentDiv">
            <div className="userProfileDetailsChildDiv">
              <p>User's Mail</p>
              <Gear onClick={editUserMail} />
            </div>
            <p>{info[4]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfileLast;
