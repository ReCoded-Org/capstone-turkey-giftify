import React, { useState, useEffect } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import db from "../../firebase";
import "./ContactUs.css";

function ContactUs() {
  const [inputdata, setInputData] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  // const [inputs, setInputs] = useState ({
  //   inputName: "",
  //   inputEmail: "",
  //   inputMessage: ""
  // });


  // useEffect(() => {
  //   setInputName(inputName: "yor name")
  //   console.log(inputs.inputName)
  // }, [inputs])

  function handleSubmit(e) {
    e.preventDefault();
    db.collection("contactUs")
      .add({
        name: inputName,
        email: inputEmail,
        Message: inputMessage,
      })
      .then(() => {
        setInputName("");
        setInputEmail("");
        setInputMessage("");
      });
  }

  const getData = () => {
    db.collection("contactUs").onSnapshot(function (querySnapshot) {
      setInputData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          name: doc.data().inputName,
          email: doc.data().inputEmail,
          Message: doc.data().inputMessage,
        }))
      );
    });
  };

  useEffect(() => {    
    getData();
  }, [inputdata]);

  

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
          <form className="inputForm" onSubmit={handleSubmit}>
            <h5>Get In Touch</h5>
            <label>
              <h6>Name</h6>
              <input
                type="text"
                name="name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />{" "}
              <br />
              <h6>Email</h6>
              <input
                type="text"
                name="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />{" "}
              <br />
              <h6>Message</h6>
              <textarea
                className="message"
                type="text"
                name="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
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
