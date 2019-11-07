import React, { Component } from "react";
import "./App.css";
import Navbar1 from "./components/Navbar";
import Amplify from "aws-amplify";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import Certifications from "./components/Certifications";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import aws_exports from "./aws-exports";
import { Hub } from "aws-amplify";
import { Auth } from "aws-amplify";

Amplify.configure(aws_exports);
class App extends Component {
  constructor(props) {
    super(props);

    this.loadUser = this.loadUser.bind(this);

    Hub.listen("auth", this, "navigator"); // Add this component as listener of auth event.

    this.state = { user: null };
  }
  componentDidMount() {
    this.loadUser(); // The first check
  }
  loadUser() {
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user: user }))
      .catch(err => this.setState({ user: null }));
  }
  onHubCapsule(capsule) {
    this.loadUser(); // Triggered every time user sign in / out
  }
  render() {
    const { user } = this.state;

    return (
      <div>
     
        <Router>
          <div>
          <Navbar1 user={user} />
            <Switch>
              <Route
                exact
                path="/login"
                render={props => <Login user={user} />}
              />
              <Route
                exact
                path="/home"
                render={props => <Home user={user} />}
              />
              <Route
                exact
                path="/myprofile"
                render={props => <MyProfile user={user} />}
              />
              <Route exact path="/Certifications" render={props => <Certifications user={user} />}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
