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
  const [inputMassege, setInputMassege] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputName);
    db.collection("contactUs")
      .add({
        name: inputName,
        email: inputEmail,
        massege: inputMassege,
      })
      .then(() => {
        setInputName("");
        setInputEmail("");
        setInputMassege("");
      });
  }

  useEffect(() => {
    const getData = () => {
      db.collection("contactUs").onSnapshot(function (querySnapshot) {
        setInputData(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            name: doc.data().inputName,
            email: doc.data().inputEmail,
            massege: doc.data().inputMassege,
          }))
        );
      });
    };
    getData();
  }, [inputdata]);

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="box">
        <div className="contatctinfo">
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
          <form className="inpurForm" onSubmit={handleSubmit}>
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
              <h6>Massege</h6>
              <input
                className="massege"
                type="text"
                name="massege"
                value={inputMassege}
                onChange={(e) => setInputMassege(e.target.value)}
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
