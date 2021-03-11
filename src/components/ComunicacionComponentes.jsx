import React, { Component } from "react";
export default class Father extends Component {
  state = {
    counter: 0,
  };

  increaseCounter = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <h3>Soy un Counter hecho con Keyboard Mecanico</h3>
        <p>
          Counter <b>{this.state.counter}</b>
        </p>
        <Child increaseButton={this.increaseCounter} message="Soy un mensaje" />
      </>
    );
  }
}

function Child(props) {
  return (
    <>
      <h3>{props.message}</h3>
      <button onClick={props.increaseButton}>Add</button>
    </>
  );
}
