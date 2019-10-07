import React, { Component } from 'react'
import Aux from '../Hoc/hocAux'
import Cards from '../containers/Cards'

export class Certifications extends Component {
    cardData = [
        {
            name: 'jobz',
            age: 10
        },
        {
            name: 'jobz',
            age: 10
        },
        {
            name: 'jobz',
            age: 10
        }
    ]
  render() {
    return (
      <Aux>
        <Cards data={this.cardData} />
      </Aux>
    )
  }
}

export default Certifications
