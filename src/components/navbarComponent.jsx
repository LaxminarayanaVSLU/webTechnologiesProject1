import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useState } from "react";
import logo from "../styles/images/logo.svg";
import { useNavigate } from "react-router-dom";

export function NavBarComponent({ currentPage: initialPage }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleHomeNavigation = () => {
    console.log("navigating to home!");
    setCurrentPage("HomePage"); // Update currentPage if needed
    navigate("/webTechnologiesProject1/");
  };

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/webTechnologiesProject1/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Logo"
        />
        {"Smart Contracts"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Container fluid>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/webTechnologiesProject1/" active={currentPage === "HomePage"}>
              Home
            </Nav.Link>
            <Nav.Link href="/webTechnologiesProject1/content" active={currentPage === "ContentPage"}>
              Content
            </Nav.Link>
            <Nav.Link href="/webTechnologiesProject1/taxonomy" active={currentPage === "TaxonomyPage"}>
              Taxonomy
            </Nav.Link>
            <Nav.Link href="/webTechnologiesProject1/team" active={currentPage === "TeamPage"}>
              Team
            </Nav.Link>
          </Nav>
          <Button onClick={handleHomeNavigation}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
