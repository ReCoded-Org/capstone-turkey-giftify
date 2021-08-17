import React from "react";
import "./UserProfile.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserProfile() {
  return (
    <div id="userProfile">
      <div id="upperSection">
        <div id="profilePicture">
          <img alt="profile" />
        </div>
        <div id="upperText">
          <button>Edit</button>
          <h3>Sammy Larson</h3>
          <br />
        </div>

        <div id="belowText">
          <p>E-Mail Address</p>
          <p>Location</p>
        </div>
      </div>
      <div id="belowSection">
        <h4>About</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;

//final return

return (
  <div id="ProfilePage">
    <div id="userProfile">
      <div id="upperSection">
        <div id="profilePicture">
          <img alt="profile" />
        </div>
        <Container id="myCont">
          <Row>
            <Col>
              <h3>Ad Soyad</h3>
            </Col>
            <Col>
              <button>Edit</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>e-mail address</p>
            </Col>
            <Col>
              <p>location</p>
            </Col>
          </Row>
        </Container>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <hr />
      <div id="belowSection">
        <h5>About</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div id="card">Product</div>
  </div>
);
