import React, { Component } from 'react';
import { Lead } from 'bootstrap-4-react';
import { Authenticator } from 'aws-amplify-react';

export default class Home extends Component {
  render() {
    const { user } = this.props;

  

    return (
      <React.Fragment>
          <h1>This is Home</h1>
        { !user && <Authenticator /> }
        { user && <Lead>You are signed in as {user.username}.</Lead> }
      </React.Fragment>
    )
  }
}