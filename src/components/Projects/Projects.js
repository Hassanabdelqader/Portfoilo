import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Capture from "../../Assets/Projects/Capture.png";
import raiveny from "../../Assets/Projects/raiveny.png";
import chocff from "../../Assets/Projects/chocff.jpg";
import whiteboard from "../../Assets/Projects/whiteboard.png";
import chat from "../../Assets/Projects/chat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Capture}
              isBlog={false}
              title="Nasian"
              description="An application to display stars and planets by searching by name"
              ghLink="https://github.com/Hassanabdelqader/nasian-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteboard}
              isBlog={false}
              title="Whiteboard"
              description="Personal whiteboard application for personal uses"
              ghLink="https://github.com/Hassanabdelqader/whiteboard-front"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="HD Chat"
              description="Real-time instant chat Application"
              ghLink="https://github.com/Hassanabdelqader/HD-Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chocff}
              isBlog={false}
              title="Chocolate Pizza"
              description="Personal Simple project for study subject."
              ghLink="https://github.com/Hassanabdelqader/Chocolate-Pizza-CSS"
            />
            
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raiveny}
              isBlog={false}
              title="Raiveny"
              description="Application ِ that displays the names of medications based on the name of the disease that the user is searching for"
              ghLink="https://github.com/orgs/Raiveny/repositories"             
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
