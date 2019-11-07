import React, { Component } from "react";
import { Navbar, Button } from "bootstrap-4-react";

import { Hub } from "aws-amplify";
import { Auth } from "aws-amplify";


export default class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.loadUser = this.loadUser.bind(this);
    Hub.listen("auth", this, "navigator");
    this.state = { user: null, username: "", ButtonText: "SignUp" };
    this.navButtonClicked = this.navButtonClicked.bind(this);
  }
  componentDidMount() {
    this.loadUser();
    this.setState({ user: this.props.user });
    this.loadUser();
  }
  loadUser() {
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user: user, ButtonText: "SignOut" }))
      .catch(err => this.setState({ user: null }));
  }
  onHubCapsule(capsule) {
    this.loadUser(); // Triggered every time user sign in / out
  }
  navButtonClicked(e) {
      e.preventDefault();
      console.log(this.state.user)
    // if ((this.state.user)===!null) {
      Auth.signOut()
        .then(data => {
            
            this.setState({ user: "null", ButtonText: "SignUp" })
        })
        .catch(err => console.log(err));
        this.state.user=null; 
    
    
  }

  render() {
    return (
      <Navbar expand="md" dark bg="dark">
       
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Brand href="/myprofile">My Profile</Navbar.Brand>
        
        
        <Navbar.Brand href="/Certifications">Certifications</Navbar.Brand>
        <Navbar.Toggler target="#navbarsExampleDefault" />

        <Navbar.Collapse id="navbarsExampleDefault">
          <Navbar.Nav mr="auto"></Navbar.Nav>
       
         
          <Navbar.Text
            style={{ padding: "10px" }}
            label="hasangga"
          ></Navbar.Text>
          <Button style={style.buttonCss} onClick={this.navButtonClicked}>
            {this.state.ButtonText}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const style = {
  buttonCss : {
    backgroundColor : '#343a40',
    boxShadow:'none'
  }
}