import React, { Component } from 'react';

import { Authenticator } from 'aws-amplify-react';

export default class Login extends Component {
    render() {
        const { user } = this.props;
        return (
             <React.Fragment>
        { !user && <Authenticator /> }
        { user && <h1>Hello this is login i'm {user.username}</h1>}
        
      </React.Fragment>
        
        )
    }
}