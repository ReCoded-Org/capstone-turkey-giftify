import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";

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
