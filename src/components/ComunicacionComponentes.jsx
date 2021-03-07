import React, { Component } from "react";
export default class Padre extends Component {
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
        <h2>Comunicacion entre Componentes</h2>
        <p>
          Counter <b>{this.state.counter}</b>
        </p>
        <Hijo
          increaseCounterButton={this.increaseCounter}
          message="Child Message 1"
        />
        <Hijo
          increaseCounterButton={this.increaseCounter}
          message="Child Message 2 "
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.message}</h3>
      <button onClick={props.increaseCounterButton}>+</button>
    </>
  );
}
