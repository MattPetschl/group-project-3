import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Signin extends Component {
  state = {
  
  };


  render() {
    return (
    
            <form>
              <Input
                value={this.state.eventName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="User Name"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="passWord"
                placeholder="Password"
              />
              
              <FormBtn
                disabled={!(this.state.category && this.state.eventName)}
                onClick={this.handleFormSubmit}
              >
                Log in
              </FormBtn>
            </form>
    );
  }
}

export default Events;
