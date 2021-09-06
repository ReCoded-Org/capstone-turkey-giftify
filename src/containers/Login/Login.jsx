import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import db, { auth } from "../../firebase";

function Login() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginForm = (event) => {
    setLogin({ ...login, [event.target.type]: event.target.value });
  };

  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault();
    try {
      const res = await auth.signInWithEmailAndPassword(
        login.email,
        login.password
      );
      const { user } = res;
      // Read additional user info from db
      const docRef = await db.collection("users").doc(user.uid);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch({
              type: "user/login",
              payload: { userName: doc.data().displayName },
            });
          } else {
            // doc.data() will be undefined in this case
            alert("No such user!");
          }
        })
        .catch((error) => {
          alert("Couldn't access user from database:", error);
        });
      dispatch({
        type: "user/login",
        payload: { userId: user.uid },
      });
      setLogin({
        email: "",
        password: "",
      });
      return user;
    } catch (error) {
      return { error };
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginWindow">
        <h3> Log In</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={loginForm}
              value={login.email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={loginForm}
              value={login.password}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={signInWithEmailAndPassword}
          >
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
