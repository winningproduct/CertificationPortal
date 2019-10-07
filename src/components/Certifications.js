import React, { Component } from 'react'
import Aux from '../Hoc/hocAux'
import Cards from '../containers/Cards'
import '../style/certification.css'
export class Certifications extends Component {
    cardData = [
        {
            id: 1,
            name: 'jobz',
            age: 10
        },
        {
            id: 2,
            name: 'jobz',
            age: 10
        },
        {
            id: 3,
            name: 'jobz',
            age: 10
        }
    ]
  render() {
    return (
      <div className="container">
        <Cards data={this.cardData} />
      </div>
    )
  }
}

export default Certifications
