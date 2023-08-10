import React, { Component } from 'react'
import './Answere.css';

export default class Answere extends Component {
  render() {
    return (
      <button type="button" className="btn btn-outline-warning styleButton" onClick={this.props.clickButton}>{this.props.answere}</button>
    )
  }
}
