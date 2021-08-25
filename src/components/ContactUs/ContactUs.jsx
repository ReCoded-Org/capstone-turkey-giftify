import React, { useState, useEffect } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import db from "../../firebase";
import "./ContactUs.css";

function ContactUs() {
  const [inputdata, setInputData] = useState([]);

  const [inputs, setInputs] = useState({
    inputName: "",
    inputEmail: "",
    inputMessage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contactUs")
      .add({
        to: "ayshe.997@gmail.com",
        userMassege: {
          name: inputs.inputName,
          email: inputs.inputEmail,
          Message: inputs.inputMessage,
        },
      })
      .then(() => {
        setInputs({
          inputName: "",
          inputEmail: "",
          inputMessage: "",
        });
      })
      .then(() => {
        alert("Your message has been successfully submitted");
      });
  }

  const getData = () => {
    db.collection("contactUs").onSnapshot(function (querySnapshot) {
      setInputData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          name: doc.data().name,
          email: doc.data().email,
          Message: doc.data().Message,
        }))
      );
    });
  };

  useEffect(() => {
    getData();
  }, [inputdata]);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setInputs({
      ...inputs,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="box">
        <div className="contactInfo">
          <h5>
            {" "}
            <FiMapPin className="icon" /> Turkey - Istanbul
          </h5>
          <h5>
            <FiPhone className="icon" /> +90 500 000 00 00
          </h5>
          <h5>
            <FiMail className="icon" /> giftify@giftify.com
          </h5>
          <div className="sosyalMed">
            <h5>
              <a href="#link">
                <ImFacebook2 className="facebook" /> Giftify
              </a>
            </h5>
            <h5>
              <a href="#link">
                {" "}
                <GrInstagram className="instagram" /> Giftify
              </a>{" "}
            </h5>
          </div>
        </div>
        <div>
          <form className="inputForm" onSubmit={handleSubmit} method="POST">
            <h5>Get In Touch</h5>
            <label>
              <h6>Name</h6>
              <input
                type="text"
                name="inputName"
                value={inputs.inputName}
                onChange={handleChange}
              />{" "}
              <br />
              <h6>Email</h6>
              <input
                type="text"
                name="inputEmail"
                value={inputs.inputEmail}
                onChange={handleChange}
              />{" "}
              <br />
              <h6>Message</h6>
              <textarea
                className="message"
                type="message"
                name="inputMessage"
                data-gramm_editor="false"
                value={inputs.inputMessage}
                onChange={handleChange}
              />
            </label>
            <input className="submitData" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
