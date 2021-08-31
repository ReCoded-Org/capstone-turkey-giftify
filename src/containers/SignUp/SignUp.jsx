import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import cities from "../../data/SignUp/cities.json";
import db from "../../firebase";
import "./SignUp.css";

function SignUp() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    photoURL: "",
    city: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (formData.password === formData.password2) {
      setValidated(true);
      event.preventDefault();
      // create a user with email and password, then store other data in database/users/{uid}
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((userCredential) => {
          const { user } = userCredential;
          db.collection("users")
            .doc(user.uid)
            .set({
              firstName: formData.firstName,
              lastName: formData.lastName,
              photoURL: formData.photoURL,
              city: formData.city,
              email: formData.email,
            })
            .then(() => {
              alert("Sign Up Successful!");
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                password2: "",
                photoURL: "",
                city: "",
              });
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else if (formData.password !== formData.password2) {
      event.preventDefault();
      alert("Passwords don't match!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        photoURL: "",
        city: "",
      });
    }
  };
  // LogIn with Google
  const logInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // This gives you a Google Access Token. You can use it to access the Google API.
        const { credential } = result;
        const token = credential.accessToken;
        // The signed-in user info, we create an entry in users to store data in database
        const { user } = result;
        db.collection("users").doc(user.uid).set({
          firstName: user.displayName,
          lastName: user.displayName,
          photoURL: user.photoURL,
          city: "",
          email: user.email,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // LogIn with Facebook
  const logInFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { credential } = result;

        // The signed-in user info, we create an entry in users to store data in database
        const { user } = result;
        db.collection("users").doc(user.uid).set({
          firstName: user.displayName,
          lastName: user.displayName,
          photoURL: user.photoURL,
          city: "",
          email: user.email,
        });
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const { accessToken } = credential;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Container className="fluid formContainer">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="userForm"
      >
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="Enter first name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Enter last name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-dark">
            We&apos;ll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter password"
            required
          />
          <Form.Text className="text-dark">
            Password should be at least six characters long
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword2">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            onChange={handleChange}
            value={formData.password2}
            placeholder="Re-enter password"
            required
          />
        </Form.Group>

        <Form.Group controlId="photoURL">
          <Form.Label>Profile Pic URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            onChange={handleChange}
            value={formData.photoURL}
            placeholder="Enter profile picture URL"
          />
        </Form.Group>

        <Form.Group controlId="formControlSelectCity">
          <Form.Label>Select your City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            onChange={handleChange}
            value={formData.city}
            required
          >
            {cities.map((city, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index}>{city}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="button">
          Sign Up!
        </Button>

        <Button
          variant="light"
          type="button"
          className="button"
          onClick={logInFacebook}
        >
          Log In!
        </Button>

        <Button variant="light" type="button" onClick={logInGoogle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          Log in with Google!
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
