import React from "react";
import { Card } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import { ourTeamData } from "./../../data/OurTeam/ourTeamData";

const OurTeamForLargeScreen = () => {
  return (
    <div className="ourTeamMainDiv">
      <h1>Our Team</h1>
      <div className="teamMembersCardMainDiv">
        {ourTeamData.map((info) => (
          <Card key={info.id}>
            <Card.Img variant="top" src={info.image} />
            <Card.Body className="CardUpperPart">
              <Card.Title>{info.name}</Card.Title>
              <Card.Text>Junior Frontend Developer</Card.Text>
            </Card.Body>
            <Card.Body className="CardLowerPart">
              <Card.Link href={info.linkedInLink} target="_blank">
                <Linkedin />
              </Card.Link>
              <Card.Link href={info.githubLink} target="_blank">
                <Github />
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurTeamForLargeScreen;
