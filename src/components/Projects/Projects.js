import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assests/Projects/calculator.jpg";
import emotion from "../../Assests/Projects/dice.jpg";
import editor from "../../Assests/Projects/news.png";
import chatify from "../../Assests/Projects/carweb.jpg";
import suicide from "../../Assests/Projects/fbpage.jpg";
import bitsOfCode from "../../Assests/Projects/weather.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="Car Website"
              description=
              "Developed a modern and responsive car showcase website using HTML, CSS, and JavaScript. The site features a homepage with highlighted cars, a dynamic gallery page, and a functional contact form. Implemented interactive elements to enhance user experience, ensuring the website is visually appealing and easy to navigate."
              ghLink="https://github.com/RehanYousuf/Car-Website"
              demoLink="https://car-website-ruby.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description=
              "A sleek weather app that provides real-time weather updates for any location. Built with HTML, CSS, and JavaScript, it features a responsive design and utilizes API integration for accurate weather data.This project demonstrates my front-end development skills and ability to work with APIs."
              ghLink="https://github.com/RehanYousuf/Weather-App"
              demoLink="https://weather-app-nine-murex-38.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="News App"
              description=
              "Get the latest news instantly with this sleek News app. Designed for simplicity and speed, it offers personalized feeds, breaking news alerts, and easy sharing options. Built using HTML, CSS, and JavaScript, it's your go-to source for staying informed on the go."
              ghLink="https://github.com/RehanYousuf/News-App"
              demoLink="https://news-app-one-sable.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Calculator"
              description=
              "Developed a user-friendly and responsive calculator application using HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division. This project showcases my ability to create functional web applications with a clean and intuitive interface, emphasizing accuracy and ease of use."
              ghLink="https://github.com/RehanYousuf/CALCULATOR"
              demoLink="https://calculator-two-rho-14.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Dice Game"
              description=
              "Step into the realm of chance with this captivating Dice Game project! Crafted using HTML, CSS, and JavaScript, it offers an immersive gaming experience. With sleek design and seamless functionality, roll the dice and watch your luck unfold. Elevate your portfolio with this engaging demonstration of front-end development prowess."
              ghLink="https://github.com/RehanYousuf/Dice-Project"
              demoLink="https://dice-project-sample.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Facebook Page Clone"
              description=
              "Explore my Facebook Page clone, a meticulously crafted project showcasing my proficiency in HTML, CSS, and JavaScript. Experience the essence of social networking through a visually appealing and interactive interface, highlighting my skills in front-end development. Dive into this demonstration of creativity and technical expertise within my portfolio."
              ghLink="https://github.com/RehanYousuf/Facebook-Page-Clone"
              demoLink="https://facebook-page-clone.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;