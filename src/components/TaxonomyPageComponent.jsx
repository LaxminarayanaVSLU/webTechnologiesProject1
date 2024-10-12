import { NavBarComponent } from "./navbarComponent";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import tanmayee from "../styles/images/tanmaye.jpeg";
import paul from "../styles/images/paul.jpeg";
import lax from "../styles/images/lax.jpg";
import krishna from "../styles/images/krishna.jpeg";
import roshitha from "../styles/images/roshitha.jpeg";
import "../styles/css/imagesRel.css";

const images = [
  {
    src: tanmayee,
    description: "This is a description for Image 1.",
  },
  {
    src: paul,
    description: "This is a description for Image 2.",
  },
  {
    src: lax,
    description: "This is a description for Image 3.",
  },
  {
    src: krishna,
    description: "This is a description for Image 4.",
  },
  {
    src: roshitha,
    description: "This is carousel of roshitha.",
  },
];

const TaxonomyPageComponent = () => {
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
      {/* <NavBarComponent currentPage="TaxonomyPage" /> */}
      <br></br>

      <section id="taxonomy">
        <Container>
          {/* Carousel Section */}
          <Row className="mb-4">
            <Col>
              <Carousel data-aos="fade-up">
                {images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 fixed-size-img"
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                    />
                    <Carousel.Caption>
                      <h5>{image.description}</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>

          {/* Content Section */}
          <Row>
            {Array.from({ length: 8 }).map((_, index) => (
              <Col md={6} className="mb-4" key={index}>
                <Card data-aos="fade-up">
                  <Card.Body>
                    <Card.Title>Random Content {index + 1}</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum eget lorem nisi. Quisque vitae malesuada arcu,
                      ut lacinia elit. Sed at dui ut purus varius ultricies.
                      Vivamus nec suscipit magna. Etiam eget lectus id nisl
                      pharetra finibus.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TaxonomyPageComponent;
