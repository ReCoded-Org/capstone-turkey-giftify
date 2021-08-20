import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import cities from "../../data/SignUp/cities.json";

//Create form fields first with bootstrap, then connect it to firebase

function SignUp() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
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

    setValidated(true);

    //need to implement writing to firebase here
  };

  return (
    <Container className="fluid">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 5 }}>
            <Form.File id="profileImg" label="Profile Picture" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            onChange={handleChange}
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
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-warning">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword2">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            onChange={handleChange}
            placeholder="Re-Enter Password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formControlSelectCity">
          <Form.Label>Select your City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            onChange={handleChange}
            required
          >
            {cities.map((city) => (
              <option>{city}</option>
            ))}
            // import city list and render it here with .map
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up!
        </Button>

        <Button variant="light" type="button">
          Log In!
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
