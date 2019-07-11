import React, { useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { withRouter } from "react-router-dom";
import Navbar from "../components/Nav";

export const Signin = withRouter(function Signup(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setter = set => e => set(e.target.value);

  function submitSignup() {
    props.history.push("/events");
    return;
  }

  return (
    <>
      <Navbar />
      <form>
        <Input
          value={username}
          onChange={setter(setUsername)}
          name="userName"
          placeholder="Eamil (e.g. sjobs@apple.com)"
        />
        <Input
          value={password}
          onChange={setter(setPassword)}
          name="passWord"
          placeholder="Password"
        />

        <FormBtn disabled={!(username && password)} onClick={submitSignup}>
          Log in
        </FormBtn>
      </form>
    </>
  );
});
