import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/css/whyUs.css";
import "bootstrap/dist/js/bootstrap.bundle"; // Make sure you have Bootstrap JS included

const HomePageComponent = () => {
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
      <div>
        <section id="home" className="why-us section-bg" style={{ backgroundColor: '#f0f8ff' }}>
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                <div className="content">
                  <h3>
                    <strong>
                      {" "}
                      Smart Contracts with Blockchain Integration{" "}
                    </strong>{" "}
                    for Web Applications
                  </h3>
                  <p>
                    Smart contracts and blockchain integration are transforming
                    the landscape of web applications by enabling decentralized,
                    trustless interactions. Smart contracts, which are
                    self-executing agreements coded on a blockchain, ensure
                    security and transparency in transactions. This technology
                    allows developers to create innovative and efficient
                    solutions across various sectors, from finance to supply
                    chain management. As demand for decentralized applications
                    grows, mastering smart contract integration is essential for
                    advancing web development and fostering new opportunities.
                  </p>
                </div>
                <div className="accordion-list">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target="#accordion-list-1"
                      >
                        <span>01</span> Overview{" "}
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Blockchain technology is increasingly integrated into
                          web applications, offering decentralized, secure, and
                          transparent systems. By utilizing smart
                          contracts—self-executing code that runs on the
                          blockchain—developers can build decentralized
                          applications (dApps) that automate processes without
                          intermediaries. These systems promise enhanced
                          security, data integrity, and transparency, making
                          them ideal for applications in finance (DeFi), supply
                          chain management, identity verification, and more.
                          However, the adoption of blockchain in web
                          applications brings challenges related to performance,
                          scalability, and security, along with exciting avenues
                          for future research.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-2"
                        className="collapsed"
                      >
                        <span>02</span> Challenges
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Transaction Throughput: Public blockchains like
                          Ethereum and Bitcoin have limited transaction
                          throughput compared to traditional databases.
                          Ethereum, for example, can process only around 15
                          transactions per second, which becomes a bottleneck
                          for large-scale web applications.
                        </p>

                        <ol>
                          <li>
                            <strong>Smart Contract Vulnerabilities:</strong>{" "}
                            Smart contracts are prone to bugs and
                            vulnerabilities, which hackers can exploit, leading
                            to significant financial losses (e.g., the 2016 DAO
                            hack on Ethereum).
                          </li>

                          <li>
                            <strong>Interoperability:</strong> Most blockchains
                            are siloed systems, making it difficult for
                            different blockchain platforms to communicate.
                            Without effective cross-chain interoperability, data
                            and assets cannot seamlessly move between
                            blockchains, limiting the potential of decentralized
                            web applications.
                          </li>

                          <li>
                            <strong>
                              Regulatory and Compliance Challenges:
                            </strong>{" "}
                            The regulatory environment surrounding blockchain
                            technologies is unclear, especially in areas like
                            data privacy (GDPR), taxation, and anti-money
                            laundering (AML). Uncertainty in regulation poses
                            adoption barriers for enterprises looking to
                            integrate blockchain solutions.
                          </li>
                        </ol>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        className="collapsed"
                      >
                        <span>03</span> future research
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-3"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <ol>
                          <li>
                            <strong>Transaction Throughput:</strong> Research
                            into Layer 2 scaling solutions like state channels
                            and rollups, along with sharding and new consensus
                            mechanisms, is needed to improve blockchain
                            transaction speed and capacity.
                          </li>

                          <li>
                            <strong>Smart Contract Vulnerabilities:</strong>{" "}
                            Advancements in formal verification, automated
                            security auditing, and the standardization of smart
                            contract development practices will help reduce bugs
                            and vulnerabilities.
                          </li>

                          <li>
                            <strong>Interoperability:</strong> Development of
                            robust cross-chain protocols, atomic swaps,
                            decentralized bridges, and oracle networks will
                            enhance communication and data transfer between
                            different blockchains.
                          </li>

                          <li>
                            <strong>
                              Regulatory and Compliance Challenges:
                            </strong>{" "}
                            Future research should focus on privacy-preserving
                            technologies, legal frameworks for smart contracts,
                            self-regulating DAOs, and decentralized solutions
                            for KYC and AML compliance to address regulatory
                            concerns while maintaining privacy.
                          </li>
                        </ol>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-5 why-bg-img align-items-stretch order-1 order-lg-2 img"
                data-aos="zoom-in"
                data-aos-delay="150"
              ></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageComponent;
