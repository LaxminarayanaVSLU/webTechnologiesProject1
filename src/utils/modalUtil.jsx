import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import teamData from './teamMemberDetails.json';

function ShowTeamModal({ show, onHide, personName }) {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [achievements, setAchievements] = useState("");

  useEffect(() => {
    if (personName) {
      const candidateData = getCandidateData(personName);
      setName(candidateData.name);
      setDetails(candidateData.details);
      setAchievements(candidateData.achievements);
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
      <Modal.Body>{details}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowTeamModal;
