import React from "react"
import "./About.css"
import aboutImage from "./aboutImage.png"
import { Row } from "react-bootstrap";

const About = () => {


    return(
        <div className="aboutUsMainDiv">
            <Row className="upperPartAbout">
                <h1>About Us</h1>
                <div className="visionMisionMainDiv">
                    <span>Our Vision: Everyone can get what they want in a fast and easy way</span>
                    <span>Our Mision: Trade things are no longer used between people for a clean environment</span>
                </div>
            </Row>
            <Row>
                <div className="middleArea">
                    <div className="middleAreaTextbox">
                        <p>
                        Giftify is a platform for trading things that are no longer 
                        used between people who stay in the same area. People have 
                        the chance to get their needs in free by giving the convincing 
                        reason of needing a specific product/service to the owner then 
                        the owner has the freedom to choose which applicant has deserved 
                        his product or service more than the other applicants.
                        </p>
                    </div>
                    <div className="middleAreaImage">
                        <img src={aboutImage} alt="About pic" />
                    </div>
                </div>
            </Row>
        </div>
        
        
    )
}

export default About