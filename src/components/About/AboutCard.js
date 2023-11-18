import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hasan Abedalqader </span>
            from <span className="purple"> Amman, Jordan.</span>
            <br />
            I am currently work as a software developer.
            <br />
            I have completed Bachelor degree in Computer Science from Jordan university of science and technology.            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
