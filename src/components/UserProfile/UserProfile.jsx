import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <div id="ProfilePage">
              <div id="navbarCosplay">NAVBAR</div>
              <div id="userProfile">
                <div id="upperSection">
                  <div id="profilePicture">
                    <img src={singleUser.profileImg} alt="profile" />
                  </div>
                  <Container id="myCont">
                    <Row>
                      <Col>
                        <h3>
                          {singleUser.firstName} {singleUser.lastName}
                        </h3>
                      </Col>
                      <Col>
                        <button>Edit</button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>{singleUser.email}</p>
                      </Col>
                      <Col>
                        <p>{singleUser.city}</p>
                      </Col>
                    </Row>
                  </Container>

                  {/*
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <hr />
                  <div id="belowSection">
                    <h5>About</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
          </div>*/}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default UserProfile;
