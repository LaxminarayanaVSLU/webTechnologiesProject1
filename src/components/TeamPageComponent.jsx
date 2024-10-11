import { NavBarComponent } from "./navbarComponent";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import tanmayee from "../styles/images/tanmaye.jpeg";
import paul from "../styles/images/paul.jpeg";
import lax from "../styles/images/lax.jpg";
import krishna from "../styles/images/krishna.jpeg";
import roshitha from "../styles/images/roshitha.jpeg";

import "../styles/css/imagesRel.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/js/bootstrap.bundle";

const TeamPageComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <NavBarComponent currentPage="TeamPage" />

      <div>
        <br />
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "20rem" }} data-aos="fade-up">
                <Card.Img
                  variant="top"
                  src={tanmayee}
                  className="fixed-size-img"
                />
                <Card.Body>
                  <Card.Title>Tanmayee Bachinappa</Card.Title>
                  <Card.Text>
                    Computer Science major at Saint Louis University, graduating
                    in May 2025. My expertise lies in software engineering,
                    machine learning, and web development, with proficiency in
                    Python, Django, React, and Docker. I've worked on diverse
                    projects, including predictive analytics and web
                    applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem" }} data-aos="fade-up">
                <Card.Img variant="top" src={paul} className="fixed-size-img" />
                <Card.Body>
                  <Card.Title>Paul Ongkiko</Card.Title>
                  <Card.Text>
                    Senior Computer Science major from Lindenhurst, Illinois.
                    Previously Software Engineer Co-op for Bayer Crop Science in
                    Creve Coeur. I enjoy photography and playing games on the
                    side, and have a personal website to showcase both
                    photo/video and SWE experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem" }} data-aos="fade-up">
                <Card.Img variant="top" src={lax} className="fixed-size-img" />
                <Card.Body>
                  <Card.Title>Laxminarayana Vadnala</Card.Title>
                  <Card.Text>
                    Senior Computer Science major from Lindenhurst, Illinois.
                    Previously Software Engineer Co-op for Bayer Crop Science in
                    Creve Coeur. I enjoy photography and playing games on the
                    side, and have a personal website to showcase both
                    photo/video and SWE experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Card style={{ width: "20rem" }} data-aos="fade-up">
                <Card.Img
                  variant="top"
                  src={krishna}
                  className="fixed-size-img"
                />
                <Card.Body>
                  <Card.Title>Krishna Teja Rangavajjala</Card.Title>
                  <Card.Text>
                    Pursuing a master’s degree in Computer Science. I completed
                    my undergraduate studies in Information Technology at CVR
                    College of Engineering. After finishing my undergraduate
                    program, I directly started my master’s program. I have a
                    strong understanding of Java, HTML, CSS, JavaScript, basic
                    React, basic Spring, JDBC, SQL, Python, and machine
                    learning. During my undergraduate studies, I worked on two
                    projects: a movie recommendation system using Python, and a
                    project that predicted hotel booking cancellations using
                    machine learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem" }} data-aos="fade-up">
                <Card.Img
                  variant="top"
                  src={roshitha}
                  className="fixed-size-img"
                />
                <Card.Body>
                  <Card.Title>Roshitha Makula</Card.Title>
                  <Card.Text>
                    a master's student in Computer Science with a strong
                    foundation in C, Python, Machine Learning, Databases, Design
                    and Analysis of Algorithms, and React.js. My academic
                    journey has included two impactful research projects,
                    ⁠Updating of GIS Maps with Water Bodies Change Detection,
                    ⁠Cotton Plant Disease Prediction. Currently, I am pursuing
                    advanced courses in web technologies, AI, and ML to further
                    enhance my expertise in software engineering and machine
                    learning applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col></Col>
          </Row>
        </Container>
        <br />
      </div>
    </div>
  );
};

export default TeamPageComponent;
