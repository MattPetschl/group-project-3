import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Events extends Component {
  state = {
    events: [],
    eventName: "",
    category: "",
    description: "",
    time: "",
    location: ""
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({
          events: res.data,
          eventName: "",
          category: "",
          description: "",
          time: "",
          location: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.eventName && this.state.category) {
      API.saveEvent({
        eventName: this.state.eventName,
        category: this.state.category,
        description: this.state.description,
        time: this.state.time,
        location: this.state.location
      })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Event</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.eventName}
                onChange={this.handleInputChange}
                name="eventName"
                placeholder="Event Name (required)"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="description (Optional)"
              />
              <Input
                value={this.state.time}
                onChange={this.handleInputChange}
                name="time"
                placeholder="time (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="location (required)"
              />
              <FormBtn
                disabled={!(this.state.category && this.state.eventName)}
                onClick={this.handleFormSubmit}
              >
                Submit New Event
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>All Events</h1>
            </Jumbotron>
            {this.state.events.length ? (
              <List>
                {this.state.events.map(events => (
                  <ListItem key={events._id}>
                    <Link to={"/events/" + events._id}>
                      <strong>
                        {events.eventName} in category {events.category}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteEvent(events._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Events;
