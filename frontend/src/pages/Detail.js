import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    events: {}
  };

  componentDidMount() {
    API.getEvent(this.props.match.params.id)
      .then(res => this.setState({ events: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.events.eventName}</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h2>Description</h2>
              <p>{this.state.events.description}</p>
              <h2>category</h2>
              <p>{this.state.events.category}</p>
              <h2>time</h2>
              <p>{this.state.events.time}</p>
              <h2>location</h2>
              <p>{this.state.events.location}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <Link to="/events">← Back to all events</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
