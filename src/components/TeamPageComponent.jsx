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
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/js/bootstrap.bundle";
import ImageWithTooltip from "./ImageWithTooltip";
import "../styles/css/ImageWithTooltip.css";

const images = [
  {
    name: "tanmaye",
    src: tanmayee,
    description: "This is a description for Image 1.",
  },
  {
    name: "paul",
    src: paul,
    description: "This is a description for Image 2.",
  },
  {
    name: "lax",
    src: lax,
    description: "This is a description for Image 3.",
  },
  {
    name: "krishna",
    src: krishna,
    description: "This is a description for Image 4.",
  },
  {
    name: "roshitha",
    src: roshitha,
    description: "This is carousel of roshitha.",
  },
];

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
    <div style={{ backgroundColor: "#f0f8ff" }}>
      {/* <NavBarComponent currentPage="TeamPage" /> */}

      <br></br>
      <section id="team">
        <div>
          {/* Carousel Section */}
          <Row className="mb-4">
            <Col>
              <Carousel data-aos="fade-up">
                {images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block zoom fixed-size-img"
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      style={{ width: "300px", height: "300px" }}
                      onClick={() => handleShow(image.name)}
                    />
                    <Carousel.Caption>
                      <h5>{image.description}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>

          <ShowTeamModal
            show={show}
            onHide={handleClose}
            personName={selectedPerson}
          />

          <br />
          <Container>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "12rem" }} data-aos="fade-up">
                  <Image
                    src={tanmayee}
                    className="fixed-size-img zoom"
                    onClick={() => handleShow("tanmaye")}
                  />
                </Card>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "12rem" }} data-aos="fade-up">
                  <Image
                    src={paul}
                    className="fixed-size-img zoom"
                    onClick={() => handleShow("paul")}
                  />
                  {/* <Card.Body>
                    <Card.Title>Paul Ongkiko</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow("paul")}
                    >
                      Show More details
                    </Button>
                  </Card.Body> */}
                </Card>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "12rem" }} data-aos="fade-up">
                  <Image
                    src={lax}
                    className="fixed-size-img zoom"
                    onClick={() => handleShow("lax")}
                  />
                  {/* <Card.Body>
                    <Card.Title>Laxminarayana Vadnala</Card.Title>
                    <Button variant="primary" onClick={() => handleShow("lax")}>
                      Show More details
                    </Button>
                  </Card.Body> */}
                </Card>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "12rem" }} data-aos="fade-up">
                  <Image
                    src={krishna}
                    className="fixed-size-img zoom"
                    onClick={() => handleShow("krishna")}
                  />
                  {/* <Card.Body>
                    <Card.Title>Krishna Teja Rangavajjala</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow("krishna")}
                    >
                      Show More details
                    </Button>
                  </Card.Body> */}
                </Card>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
                <Card style={{ width: "12rem" }} data-aos="fade-up">
                  <Image
                    src={roshitha}
                    className="fixed-size-img zoom"
                    onClick={() => handleShow("roshitha")}
                  />
                  {/* <Card.Body>
                    <Card.Title>Roshitha Makula</Card.Title>
                    <Button
                      variant="primary"
                      onClick={() => handleShow("roshitha")}
                    >
                      Show More details
                    </Button>
                  </Card.Body> */}
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
