import React from "react"
import "./Login.css"
import {Form, Button } from "react-bootstrap"
import { auth, googleProvider, facebookProvider, db } from "../../firebase";

function Login () {
  const signInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const user = result.user;
      const data = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      };
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
  
      if (query.docs.length === 0) {
        await db.collection("users").add(data);
      }
      return data;
    } catch (error) {
      return { error };
    }
  };
  const signInWithFacebook = async () => {
    try {
      const result = await auth.signInWithPopup(facebookProvider);
      const user = result.user;
      const data = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      };
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add(data);
      }
      return data;
    } catch (error) {
      return { error };
    }
  };
  
  const signInWithEmailAndPassword = async ({ email, password }) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      const user = res.user;
      return user;
    } catch (error) {
        return {error};
      }
    }
  };
  
    return (
      <div className="loginContainer">
        <div className="loginWindow">
          <h3> Log In</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
}

export default Login