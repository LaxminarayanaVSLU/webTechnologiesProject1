import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Table, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import CardFooter from "react-bootstrap/CardFooter";
import backgroundImage from "../styles/images/home-page-background.avif";

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
      {/* <NavBarComponent currentPage="ContentPage" /> */}

      <section id="content" style={{ backgroundColor: "#f0f8ff" }}>
        <br></br>
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
            <strong> Content</strong>{" "}
          </h3>
        </div>
        <br></br>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", // Optional: centers text within the div
          }}
          className="content"
        >
          <h5>
            <strong> Classification Details</strong>{" "}
          </h5>
        </div>
        <br></br>

        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Card data-aos="fade-up">
                <CardHeader>
                  <strong>Smart Contracts and Security</strong>
                </CardHeader>
                <Card.Body>
                  <Card.Text>
                    This domain addresses the critical security issues
                    surrounding smart contracts, particularly in blockchain
                    environments. Papers in this cluster analyze
                    vulnerabilities, propose detection methods, and discuss the
                    implications of these vulnerabilities on the broader
                    blockchain ecosystem.
                  </Card.Text>
                </Card.Body>
                <CardFooter>
                  Key Findings: Identification of common vulnerabilities in
                  Ethereum smart contracts, such as reentrancy and gas limit
                  issues. Proposed frameworks for detecting vulnerabilities in
                  smart contracts, emphasizing the need for robust testing and
                  verification methods. Discussion on the importance of security
                  audits and best practices for developers to mitigate risks.
                </CardFooter>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card data-aos="fade-up">
                <CardHeader>
                  <strong>Applications of Blockchain Technology</strong>
                </CardHeader>
                <Card.Body>
                  <Card.Text>
                    This domain explores the diverse applications of blockchain
                    technology, particularly in the Internet of Things (IoT)
                    sector. The papers highlight how blockchain can enhance
                    security, transparency, and efficiency in various
                    applications.
                  </Card.Text>
                </Card.Body>
                <CardFooter>
                  Key Findings: Case studies demonstrating the integration of
                  blockchain with IoT devices for secure data sharing and
                  transaction processing. Analysis of system design perspectives
                  for implementing blockchain solutions in IoT environments.
                  Exploration of potential use cases in supply chain management,
                  healthcare, and smart cities.
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Card data-aos="fade-up">
                <CardHeader>
                  <strong>Smart Contracts in Healthcare</strong>
                </CardHeader>
                <Card.Body>
                  <Card.Text>
                    Focusing on the healthcare sector, this cluster examines how
                    smart contracts can streamline processes and enhance
                    security in health insurance and patient data management.
                  </Card.Text>
                </Card.Body>
                <CardFooter>
                  Key Findings: Implementation strategies for smart contracts
                  that facilitate secure transactions between patients and
                  health insurance providers. Benefits of using blockchain for
                  maintaining patient records, ensuring data integrity, and
                  improving patient privacy. Challenges faced in the adoption of
                  blockchain technology in healthcare, including regulatory and
                  interoperability issues.
                </CardFooter>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card data-aos="fade-up">
                <CardHeader>
                  <strong>Blockchain and Artificial Intelligence</strong>
                </CardHeader>
                <Card.Body>
                  <Card.Text>
                    This domain investigates the intersection of blockchain
                    technology and artificial intelligence (AI), discussing how
                    these technologies can complement each other to enhance
                    security and efficiency.
                  </Card.Text>
                </Card.Body>
                <CardFooter>
                  Key Findings: The role of AI in improving the security of
                  smart contracts through predictive analytics and anomaly
                  detection. Potential applications of combining blockchain and
                  AI in areas such as fraud detection, automated
                  decision-making, and data management. Future research
                  directions for integrating AI algorithms with blockchain
                  protocols to create more resilient systems.
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <Card data-aos="fade-up">
                <CardHeader>
                  <strong>
                    Technical Aspects and Future Research Directions
                  </strong>
                </CardHeader>
                <Card.Body>
                  <Card.Text>
                    This domain provides a comprehensive overview of the
                    technical aspects of blockchain and smart contracts, along
                    with insights into future research opportunities.
                  </Card.Text>
                </Card.Body>
                <CardFooter>
                  Key Findings: Detailed analysis of the technical challenges
                  faced in the development and deployment of blockchain-based
                  systems. Identification of gaps in current research,
                  highlighting areas that require further exploration, such as
                  scalability and interoperability. Recommendations for future
                  research directions, including the need for standardized
                  protocols and frameworks.
                </CardFooter>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card data-aos="fade-up">
                <CardHeader>
                  <strong>Challenges and Trends in Blockchain</strong>
                </CardHeader>
                <Card.Body>
                  <Card.Text>
                    This domain discusses the ongoing challenges and emerging
                    trends in blockchain technology, focusing on the evolving
                    landscape of smart contracts and their applications.
                  </Card.Text>
                </Card.Body>
                <CardFooter>
                  Key Findings: Examination of the regulatory challenges facing
                  blockchain adoption and the implications for smart contract
                  implementation. Trends in the development of decentralized
                  applications (dApps) and their impact on traditional business
                  models. Insights into the future of blockchain technology,
                  including potential advancements in consensus mechanisms and
                  privacy features.
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <p>
            Blockchain can address concerns about data breaches and unauthorized
            access to sensitive information, as medical records stored in a
            blockchain become tamper-proof and can only be accessed by
            authorized individuals. Insurance companies and healthcare providers
            can use smart contracts to automate claim settlements—if all
            predefined conditions (e.g., service delivery and eligibility
            verification) are satisfied, the contract automatically triggers the
            payout. DApps can be used for medical data sharing, ensuring secure
            and efficient exchange of patient records between providers.
            Blockchain ensures privacy and integrity by encrypting and
            decentralizing patient records. It supports interoperability by
            integrating semantic web standards (e.g., HL7 (Health Level Seven: A
            set of standards for exchanging healthcare data between different
            systems (e.g., hospitals, labs, pharmacies)), ICD (International
            Classification of Diseases: A coding system used to classify and
            code diagnoses, diseases, and procedures.)) that standardize
            healthcare data formats.
          </p>
        </Container>

        <Container>
          <p>
            Automation of Insurance Claims: OWL (Web Ontology Language: A
            language used to create ontologies—formal descriptions of concepts
            and relationships within a domain (e.g., medical conditions,
            treatments).) and RDF (Resource Description Framework: A standard
            model for data interchange on the web, allowing structured
            information (like patient records) to be linked and processed
            efficiently by machines.) allow complex health data (such as a
            patient’s diagnosis and treatment history) to be formally
            represented, making it easier for algorithms to process claims
            without human intervention. Streamlined Data Sharing: When different
            systems use OWL and RDF, they can exchange and understand data
            consistently, promoting data interoperability. Streamlined Data
            Sharing: When different systems use OWL and RDF, they can exchange
            and understand data consistently, promoting data interoperability.
          </p>
        </Container>

        <Container>
          <p>
            Blockchain combined with smart contracts and semantic web
            technologies offers a powerful solution for the healthcare industry.
            It ensures data security, privacy, and integrity, while semantic web
            standards enable meaningful data exchange and automation of complex
            processes like insurance claims. This integrated approach promotes
            trust and efficiency in managing patient records, insurance
            contracts, and other healthcare-related transactions.
          </p>
        </Container>
        <br></br>
      </section>
    </div>
  );
};

export default ContentPageComponent;
