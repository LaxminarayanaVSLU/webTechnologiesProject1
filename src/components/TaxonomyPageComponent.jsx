import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import tanmayee from "../styles/images/tanmaye.jpeg";
import paul from "../styles/images/paul.jpeg";
import lax from "../styles/images/lax.jpg";
import krishna from "../styles/images/krishna.jpeg";
import roshitha from "../styles/images/roshitha.jpeg";
import "../styles/css/imagesRel.css";
import PDFViewer from "./PDFViewerComponent";
import DataTable from "./TableComponent";

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

const blockChainVSTraditionalBC = [
  {
    Feature: "Data Storage",
    "Blockchain-based Insurance": "Decentralized ledger (distributed)",
    "Traditional Insurance": "Centralized databases",
  },
  {
    Feature: "Contract Execution",
    "Blockchain-based Insurance": "Automated via smart contracts",
    "Traditional Insurance": "Manual, requires intermediaries",
  },
  {
    Feature: "Transparency",
    "Blockchain-based Insurance": "High transparency and immutability",
    "Traditional Insurance": "Limited transparency, prone to errors",
  },
  {
    Feature: "Security",
    "Blockchain-based Insurance": "Secure, cryptographic protection",
    "Traditional Insurance": "Vulnerable to tampering or breaches",
  },
  {
    Feature: "Cost Efficiency",
    "Blockchain-based Insurance": "Reduced intermediary costs",
    "Traditional Insurance": "Higher due to intermediaries",
  },
  {
    Feature: "Claims Processing",
    "Blockchain-based Insurance": "Automated with realtime validation",
    "Traditional Insurance": "Delayed, manual verification",
  },
];

const performanceIssues = [
  {
    PerformanceArea: "Blockchain Latency",
    Issue: "Slow transaction processing",
    Impact: "Delayed updates to patient data and claims",
  },
  {
    PerformanceArea: "Smart Contract Limits",
    Issue: "High gas fees, limited computational power",
    Impact: "Increased costs, slower contract execution",
  },
  {
    PerformanceArea: "Semantic Data Overhead",
    Issue: "Complex parsing and reasoning",
    Impact: "Slower query responses",
  },
  {
    PerformanceArea: "Network Latency",
    Issue: "Multiple-node consensus",
    Impact: "Delays in data availability",
  },
  {
    PerformanceArea: "Scalability",
    Issue: "More participants → increased load",
    Impact: "Reduced system throughput",
  },
  {
    PerformanceArea: "Encryption Overheads",
    Issue: "Frequent encryption/decryption",
    Impact: "Higher resource consumption",
  },
  {
    PerformanceArea: "Compliance Issues",
    Issue: "Alignment with healthcare regulations",
    Impact: "Downtime and manual updates",
  },
];

const smartContractVulnerabilities = [
  {
    VulnerabilityType: "Reentrancy Attack",
    Description: "Contract can be called multiple times before completion",
    MitigationStrategy: "Use checks-effects-interactions pattern",
  },
  {
    VulnerabilityType: "Integer Overflow/Underflow",
    Description: "Arithmetic errors due to exceeding data type limits",
    MitigationStrategy: "Use SafeMath library",
  },
  {
    VulnerabilityType: "Denial of Service (DoS)",
    Description: "Contract operations blocked by excessive requests",
    MitigationStrategy: "Limit gas usage or transactions",
  },
  {
    VulnerabilityType: "Visibility Issues",
    Description: "Private functions unintentionally exposed",
    MitigationStrategy: "Properly set access control modifiers",
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
    <div style={{ backgroundColor: "#f0f8ff" }}>
      {/* <NavBarComponent currentPage="TaxonomyPage" /> */}
      <br></br>

      <section id="taxonomy">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", // Optional: centers text within the div
          }}
          className="content"
        >
          <h3>
            <strong> Taxonomy</strong>{" "}
          </h3>
        </div>

        <Container>
          {/* Content Section */}

          <Row className="mt-4">
            <Container>
              <DataTable
                data={blockChainVSTraditionalBC}
                tableHeader={"Blockchain vs Traditional Insurance Systems"}
              />
            </Container>
          </Row>

          <Row className="mt-4">
            <Container>
              <DataTable
                data={performanceIssues}
                tableHeader={"Performance Issues and Impacts"}
              />
            </Container>
          </Row>

          <Row className="mt-4">
            <Container>
              <DataTable
                data={smartContractVulnerabilities}
                tableHeader={"Smart Contract Vulnerabilities"}
              />
            </Container>
          </Row>

          {/* <Row>
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
          </Row> */}
        </Container>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", // Optional: centers text within the div
          }}
          className="content"
        >
          <Container>
            <h4>Survey Paper</h4>
          </Container>
        </div>

        <Container>
          <PDFViewer />
        </Container>
      </section>
    </div>
  );
};

export default TaxonomyPageComponent;
