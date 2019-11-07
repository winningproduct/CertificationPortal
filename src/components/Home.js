import React, { Component } from 'react';

import { Authenticator } from 'aws-amplify-react';

export default class Home extends Component {
  render() {
    const { user } = this.props;

  console.log('home')

    return (

        
        <h1>this is wpc home</h1>
        
      
    )
  }
}