import React from "react";
import Navbar from "../components/Nav";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

export function About() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>About</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="col">
            <p>
              Amass us is a meet up app. Solves world loneliness -- with 7.5
              billion people in the world and still many so lonely, that is why
              we made this app and that is our <b>mission</b>.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
