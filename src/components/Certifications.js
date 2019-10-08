import React, { Component } from 'react'
import Cards from '../containers/Cards'
import '../style/certification.css'
export class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = { Associate: '' , Professional: '' , Guru: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    alert('A name was submitted: ' + this.state[evt.target.name]);
    evt.preventDefault();
  }
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
  render() {
    return (
      <div className="container">
        <Cards data={this.cardData} handleChange={this.handleChange} handleSubmit={this.handleSubmit} associate={this.state.associate} professional={this.state.professional} guru={this.state.guru} />
      </div>
    )
  }
}

export default Certifications
