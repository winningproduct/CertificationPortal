import React, { Component } from 'react'
import { Authenticator } from 'aws-amplify-react';

export default class MyProfile extends Component {
    render() {
        const { user } = this.props;
        return (
             <React.Fragment>
        { !user && <Authenticator /> }
        { user && <h1>Hello i'm {user.username}</h1>}
        
      </React.Fragment>
        
        )
    }
}
