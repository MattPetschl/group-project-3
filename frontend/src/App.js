import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notifications from "react-notify-toast";

import Events from "./pages/Events";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Confirm from "./components/Confirm";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer/Footer";
import { API_URL } from "./config";
import "./App.css";

export default class App extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  };

  render = () => {
    const content = () => {
      if (this.state.loading) {
        return <Spinner size="8x" spinning="spinning" />;
      }

      return (
        <BrowserRouter>
          <Switch>
            {/* 
            the ':id' in this route will be the unique id the database 
            creates and is available on 'this.props' inside the <Confirm />
            component at this.props.match.params.id 
          */}
            <Route exact path="/confirm/:id" component={Confirm} />
            <Route exact path="/" component={Landing} />
            <Redirect from="*" to="/" />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      );
    };

    return (
      // The 'container' class uses flexbox to position and center its three
      // children: <Notifications />, <main> and <Footer />
      <div className="container fadein">
        {/* 
          <Notifications > component from 'react-notify-toast' This is the 
          placeholder on the dom that will hold all the feedback toast messages 
          whenever notify.show('My Message!') is called.
        */}
        <Notifications />
        <main>{content()}</main>
        {/* 
          For every Medium post I write I include a demo app that uses the same 
          footer. So, I have abstracted that out to use on future posts with 
          just a couple of props passed in.
        */}
      </div>
    );
  };
}
