import React, { Component } from 'react'
import Cards from '../containers/Cards'
import '../style/certification.css'
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
  render() {
    return (
      <div className="container">
        <Cards data={this.cardData} />
      </div>
    )
  }
}

export default Certifications
