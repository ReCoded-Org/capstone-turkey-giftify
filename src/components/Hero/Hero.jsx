import React from "react";
import "./Hero.css";
import {BrowserRouter as Router, Link} from "react-router-dom";

function Hero() {
  return  (
    <div className="hero" >
      <div className="upperPart">
        <div className="texts" >
          <h2 >Don’t need it?<br/>Giftify it!</h2>
          <p>Get rid of unused stuff clogging up your living space and give a hand to your neighbours by gifting them!</p>
        </div>
        <div className="heroImg">
          {/* an actual picture is needed */}
          <img alt="giftify" src="#" />
          </div>
      </div> 
   {/*try the button target*/}
      <Router>
        <Link className="btn" to="/donations" >Giftify Now!</Link>
      </Router>

    </div>
  );
}
export default Hero;