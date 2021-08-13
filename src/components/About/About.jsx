import React from "react"
import "./About.css"
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {


    return(
        <div className="aboutUsMainDiv">
            <h1>About Us</h1>
            <div className="visionMisionMainDiv">
                <p>Our Vision: Everyone can get what they want in a fast and easy way</p>
                <p>Our Mision: Trade things are no longer used between people for a clean environment</p>
            </div>
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

                </div>
            </div>
        </div>
        
        
    )
}

export default About