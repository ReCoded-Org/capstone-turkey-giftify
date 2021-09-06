import React from "react";
import "./Hero.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import heroLogo from "../../images/heroLogo.png";

function Hero() {
  return (
    <div className="hero">
      <div className="upperPart">
        <div className="texts">
          <h2>
            Don’t need it?
            <br />
            Giftify it!
          </h2>
          <p>
            Get rid of unused stuff clogging up your living space and give a
            hand to your neighbours by gifting them!
          </p>
        </div>
        <div className="heroImg">
          <Image src={heroLogo} alt="giftify" fluid />
        </div>
      </div>
      {/* try the button target */}
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
