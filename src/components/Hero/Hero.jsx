import React from "react";
import "./Hero.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//Button is not working from react-bootstrap

function Hero() {
  return (
    <div className="hero">
      <div className="upperPart">
        <div className="texts">
          <h1>
            Don’t need it?
            <br />
            Giftify it!
          </h1>
          <p>
            Get rid of unused stuff clogging up your living space and give a
            hand to your neighbours by gifting them!
          </p>
        </div>
        <div className="heroImg">
          {/* an actual picture is needed */}
          <img alt="giftify" src="#" />
        </div>
      </div>
      {/*try the button target*/}
      <div className="giftifyButton">
        <Router>
          <Link to="/donation/add_product_card">
            <Button variant="primary">Giftify Now!</Button>
          </Link>
        </Router>
      </div>
    </div>
  );
}
export default Hero;
