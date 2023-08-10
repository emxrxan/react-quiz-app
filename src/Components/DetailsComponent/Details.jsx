import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <div className='details'>
        <p>Du hast { this.props.currentAnswere } von { this.props.maxAnswere } Fragen beantwortet.</p>
      </div>
    )
  }
}
