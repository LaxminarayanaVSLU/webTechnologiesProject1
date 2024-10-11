import { NavBarComponent } from "./navbarComponent";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Table, Card } from "react-bootstrap";

const ContentPageComponent = () => {
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
      <NavBarComponent currentPage="ContentPage" />
    <br></br>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <Card data-aos="fade-up">
              <Card.Body>
                <Card.Title>Random Content 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque euismod odio nec magna faucibus, a luctus nisi
                  fermentum. Sed sed justo sit amet neque luctus volutpat. Proin
                  vel metus vitae arcu aliquet malesuada. Etiam dapibus arcu
                  euismod, scelerisque libero et, faucibus eros.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card data-aos="fade-up">
              <Card.Body>
                <Card.Title>Random Content 2</Card.Title>
                <Card.Text>
                  Donec auctor magna id libero blandit, a bibendum sapien
                  commodo. Ut tincidunt lacus nec nulla varius, non tincidunt
                  dui egestas. Integer convallis est non ligula viverra, eu
                  vulputate eros cursus. Aenean ut massa sit amet sapien feugiat
                  tempor. Nunc nec sapien eu orci placerat malesuada.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-4">
            <Card data-aos="fade-up">
              <Card.Body>
                <Card.Title>Random Content 3</Card.Title>
                <Card.Text>
                  Sed elementum eros sit amet nisl convallis, in consequat nunc
                  gravida. Vivamus et nunc quis erat laoreet luctus. Curabitur
                  sagittis arcu in velit condimentum, sit amet cursus eros
                  sagittis. Suspendisse potenti. Phasellus feugiat libero vel
                  metus posuere, ac malesuada risus tincidunt.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card data-aos="fade-up">
              <Card.Body>
                <Card.Title>Random Content 4</Card.Title>
                <Card.Text>
                  Cras vulputate libero non nunc mollis, id scelerisque nunc
                  tempor. Phasellus ac massa ut libero convallis bibendum.
                  Aliquam erat volutpat. Morbi ut mi at velit dapibus
                  scelerisque non sed purus. Etiam a leo urna.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card data-aos="fade-up">
              <Card.Body>
                <Card.Title>Random Content 5</Card.Title>
                <Card.Text>
                  Fusce vel velit sed odio facilisis congue. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; In et quam ut nunc efficitur ultricies. Nulla
                  euismod risus non urna cursus, nec fermentum felis porttitor.
                  Cras interdum nisi nec sapien tempus, eu ullamcorper nisl
                  blandit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Table striped bordered hover data-aos="fade-up">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Item One</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Item Two</td>
                  <td>Quisque euismod odio nec magna.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Item Three</td>
                  <td>Donec auctor magna id libero blandit.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Item Four</td>
                  <td>Sed elementum eros sit amet nisl convallis.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Item Five</td>
                  <td>Fusce vel velit sed odio facilisis congue.</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentPageComponent;
