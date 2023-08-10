import React, { Component } from 'react'

export default class QuestionHeader extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.count}.Frage</h3>
        <p>{this.props.question}</p>
      </div>
    )
  }
}
