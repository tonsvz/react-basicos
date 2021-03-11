import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}
export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, OJO, aun no esta en el dom");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "El COmponente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log(3, "El Componente ha sido Eliminado del DOM");
  }
  ticTac = (e) => {
    this.temporizador = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  };

  start = (e) => {
    this.ticTac();
    this.setState({
      visible: true,
    });
  };

  stop = (e) => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El Componente se dibuja (o redibuja por algun cambbio en el DOM)"
    );
    return (
      <>
        <h2>Ciclo de Vida de los componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <h2>Reloj Digital</h2>
        <Reloj hora={this.state.hora} />
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </>
    );
  }
}
