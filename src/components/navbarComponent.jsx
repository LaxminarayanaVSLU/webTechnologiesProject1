import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../styles/images/logo.svg";

export function NavBarComponent() {
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(window.location.hash || "#home");

  // Update active tab on hash change
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash || "#home");
    };
    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange);
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
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
            <Nav.Link href="#home" active={activeTab === "#home"}>
              Home
            </Nav.Link>
            <Nav.Link href="#content" active={activeTab === "#content"}>
              Content
            </Nav.Link>
            <Nav.Link href="#taxonomy" active={activeTab === "#taxonomy"}>
              Taxonomy
            </Nav.Link>
            <Nav.Link href="#team" active={activeTab === "#team"}>
              Team
            </Nav.Link>
          </Nav>
          <Nav.Link href="#home">
            <Button>
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
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
