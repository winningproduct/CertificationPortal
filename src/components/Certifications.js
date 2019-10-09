import React, { Component } from 'react'
import Cards from '../containers/Cards'
import '../style/certification.css'
import { API, Auth, graphqlOperation } from "aws-amplify";
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

export class Certifications extends Component {
  cardData = [
    {
      id: 1,
      name: 'Associate',
      img: 'associate.svg',
      description: 'Anim deserunt commodo enim est veniam aliquip amet.Excepteur eu proident duis nulla commodo in mollit minim. Deserunt veniam veniam qui do sit exercitation. Cillum aliqua ad occaecat incididunt nostrud adipisicing.'
    },
    {
      id: 2,
      name: 'Professional',
      img: 'proffesional.svg',
      description: 'Anim deserunt commodo enim est veniam aliquip amet. Excepteur eu proident duis nulla commodo in mollit minim. Deserunt veniam veniam qui do sit exercitation. Cillum aliqua ad occaecat incididunt nostrud adipisicing.'

    },
    {
      id: 3,
      name: 'Guru',
      img: 'guru.svg',
      description: 'Anim deserunt commodo enim est veniam aliquip amet. Excepteur eu proident duis nulla commodo in mollit minim. Deserunt veniam veniam qui do sit exercitation. Cillum aliqua ad occaecat incididunt nostrud adipisicing.'
    }
  ]
  cognitoUser = '';
constructor(props) {
  super(props);
  this.state = { Associate: '', Professional: '', Guru: '' , certificate : []};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(evt) {
  this.setState({ [evt.target.name]: evt.target.value });
}

handleSubmit(evt) {
  evt.preventDefault();
  let shouldUpdate = undefined;
  if (shouldUpdate) {
    const badgeDetails = {
      id: shouldUpdate.id,
      name: `${evt.target.name}`,
      complete: false,
      certificationUrl: `${this.state[evt.target.name]}`
    };
    API.graphql(graphqlOperation(mutations.updateCertificate, { input: badgeDetails }));
  } else {
    const badgeDetails = {
      name: `${evt.target.name}`,
      complete: false,
      certificationUrl: `${this.state[evt.target.name]}`,
      owner: this.cognitoUser.username
    };
    API.graphql(graphqlOperation(mutations.createCertificate, { input: badgeDetails }));
  }
}

componentDidMount() {
  Auth.currentAuthenticatedUser({
    bypassCache: false
  }).then( user => this.cognitoUser = user) ;
  API.graphql(graphqlOperation(queries.listCertificates)).then( data => {this.setState({certificate : data.data.listCertificates.items}) });
}

render() {
  return (
    <div className="container">
      <Cards data={this.cardData} certificate={this.state.certificate} handleChange={this.handleChange} handleSubmit={this.handleSubmit} associate={this.state.associate} professional={this.state.professional} guru={this.state.guru} />
    </div>
  )
}
}

export default Certifications



