import React , { Component } from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import Certifications from './components/Certifications';

Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Certifications />
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
