import React, { Component } from 'react'

export default class ClassComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { valor: props.initialValue }
  }

  sum(delta) {
    this.setState({ valor: this.state.valor + delta })
  }

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <h2>{this.state.valor}</h2>
        <button onClick={() => this.sum(-1)}>Decrementa</button>
        <button onClick={() => this.sum(1)}>Incrementa</button>
      </div>
    )
  }

}
