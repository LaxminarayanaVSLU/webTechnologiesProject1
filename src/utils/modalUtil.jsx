import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import teamData from "./teamMemberDetails.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "react-bootstrap/Image";

import tanmayee from "../styles/images/tanmaye.jpeg";
import paul from "../styles/images/paul.jpeg";
import lax from "../styles/images/lax.jpg";
import krishna from "../styles/images/krishna.jpeg";
import roshitha from "../styles/images/roshitha.jpeg";
import { Container } from "react-bootstrap";

function ShowTeamModal({ show, onHide, personName }) {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [contribution, setContribution] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (personName) {
      const candidateData = getCandidateData(personName);
      setName(candidateData.name);
      setDetails(candidateData.details);
      setContribution(candidateData.contribution);
      setLinkedin(candidateData.linkedin);
      setGithub(candidateData.github);
      if (candidateData.name === "Laxminarayana Vadnala") {
        setImage(lax);
      } else if (candidateData.name === "Tanmayee Gayathri") {
        setImage(tanmayee);
      } else if (candidateData.name === "Paul Ongkiko") {
        setImage(paul);
      } else if (candidateData.name === "Krishna Teja Rangavajjala") {
        setImage(krishna);
      } else {
        setImage(roshitha);
      }
    }
  }, [personName]); // Update whenever personName changes

  const getCandidateData = (personName) => {
    return teamData[personName]; // Directly access data by personName
  };

  const handleClose = () => {
    onHide(); // Call the parent's onHide function
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Container>
            <Image src={image} style={{ height: "250px" }} roundedCircle />
          </Container>

          <br></br>

          <Container>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ margin: "0 10px" }} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ margin: "0 10px" }} />
            </a>
          </Container>

          <br></br>

          <Container>{details}</Container>

          <br></br>
          <Container>
            <h5> Contribution </h5>
            {contribution}
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowTeamModal;
