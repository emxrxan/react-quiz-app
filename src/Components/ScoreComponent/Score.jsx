import React, { Component } from 'react'

export default class Score extends Component {
  render() {
    return (
      <div>
        <p>Sie haben {this.props.points} von {this.props.maxPoints} erreicht</p>
      </div>
    )
  }
}
