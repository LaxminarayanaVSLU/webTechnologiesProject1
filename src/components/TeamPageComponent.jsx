import { NavBarComponent } from "./navbarComponent";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import tanmayee from "../styles/images/tanmaye.jpeg";
import paul from "../styles/images/paul.jpeg";
import lax from "../styles/images/lax.jpg";
import krishna from "../styles/images/krishna.jpeg";
import roshitha from "../styles/images/roshitha.jpeg";

import ShowTeamModal from "../utils/modalUtil";
import { useState } from "react";

import "../styles/css/imagesRel.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/js/bootstrap.bundle";

const TeamPageComponent = () => {
  const [show, setShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState("");

  const handleShow = (personName) => {
    setSelectedPerson(personName);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedPerson("");
    setShow(false);

  };

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
      {/* <NavBarComponent currentPage="TeamPage" /> */}

      <br></br>
      <section id="team">
        <div>
          <ShowTeamModal
            show={show}
            onHide={handleClose}
            personName={selectedPerson}
          />

          <br />
          <Container>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "20rem" }} data-aos="fade-up">
                  <Image
                    src={tanmayee}
                    roundedCircle
                    className="fixed-size-img"
                  />
                  <Card.Body>
                    <Card.Title>Tanmayee Bachinappa</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow("tanmaye")}
                    >
                      Show More details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "20rem" }} data-aos="fade-up">
                  <Image src={paul} roundedCircle className="fixed-size-img" />
                  <Card.Body>
                    <Card.Title>Paul Ongkiko</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow("paul")}
                    >
                      Show More details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "20rem" }} data-aos="fade-up">
                  <Image src={lax} roundedCircle className="fixed-size-img" />
                  <Card.Body>
                    <Card.Title>Laxminarayana Vadnala</Card.Title>
                    <Button variant="primary" onClick={() => handleShow("lax")}>
                      Show More details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <br />

            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "20rem" }} data-aos="fade-up">
                  <Image
                    src={krishna}
                    roundedCircle
                    className="fixed-size-img"
                  />
                  <Card.Body>
                    <Card.Title>Krishna Teja Rangavajjala</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow("krishna")}
                    >
                      Show More details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "20rem" }} data-aos="fade-up">
                  <Image
                    src={roshitha}
                    roundedCircle
                    className="fixed-size-img"
                  />
                  <Card.Body>
                    <Card.Title>Roshitha Makula</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow("roshitha")}
                    >
                      Show More details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* <Col></Col> */}
            </Row>
          </Container>
          <br />
        </div>
      </section>
    </div>
  );
};

export default TeamPageComponent;
