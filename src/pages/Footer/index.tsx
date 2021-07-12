import React from "react";
import { Container, Col, Row, ListGroup, Nav } from "react-bootstrap";
import "./footer.scss";
import github from "../../lib/asstes/github.jpg";
import medium from "../../lib/asstes/medium.jpg";
import youtube from "../../lib/asstes/youtube.jpg";
import linkedin from "../../lib/asstes/linkedin.jpg";
import twitter from "../../lib/asstes/twitter.jpg";
import plane from "../../lib/asstes/plane.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="info-link" sm={6}>
            Learn more, schedule a demo, or speak with a member of our team.
            <br />
            <br />
            General:{" "}
            <Nav.Link
              href="mailto:info@gamil.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@gamil.com
            </Nav.Link>
            <br />
            Technical:{" "}
            <Nav.Link
              href="mailto:community@gamil.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              community@gamil.com
            </Nav.Link>
            <br />
            Investors:{" "}
            <Nav.Link
              href="mailto:corporate@gamil.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              corporate@gamil.com
            </Nav.Link>
            <br />
            Press:{" "}
            <Nav.Link
              href="mailto:press@gamil.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              press@gamil.com
            </Nav.Link>
            <br />
            <br />
          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={4}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Nav.Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HOME
                    </Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Nav.Link
                      href="/about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ABOUT US
                    </Nav.Link>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                      TECH STACK
                    </Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                      COMMUNITY
                    </Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                      DEVLEOPER
                    </Nav.Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                      BLOG
                    </Nav.Link>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row className="faq-link">
              <Col>
                <Nav.Link
                  href="/careers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAREERS
                </Nav.Link>
              </Col>
              <Col className="line">
                <Nav.Link
                  href="/legals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEGALS
                </Nav.Link>
              </Col>
              <Col className="line">
                <Nav.Link
                  href="/legals#cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COOKIES
                </Nav.Link>
              </Col>
              <Col className="line">
                <Nav.Link
                  href="/legals#disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DISCLAIMER
                </Nav.Link>
              </Col>
              <Col className="line">
                <Nav.Link
                  href="/legals#privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PRIVACY
                </Nav.Link>
              </Col>
              <Col className="line">
                <Nav.Link
                  href="/faqs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ
                </Nav.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr style={{ backgroundColor: "grey" }} />
      <Container>
        <Row>
          <Col sm={6}>
            <Row>
              <Col>
                <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                  <img src={plane} alt="plane" />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="linkedin" />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt="youtube" />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                  <img src={medium} alt="medium" />
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="github" />
                </Nav.Link>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <h5>Copyright © {new Date().getFullYear()}.</h5>
            <span>v1.0.0</span>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Footer;
