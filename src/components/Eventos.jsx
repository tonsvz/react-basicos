import React, { Component } from "react";
export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.addConstructor = this.sumatoria.bind(this);
    this.restConstructor = this.restando.bind(this);
  }

  sumatoria(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restando(e) {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    /*Esta linea de codigo crea/renderiza en el DOM*/
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <h3>Contador</h3>
        <nav>
          <button onClick={this.addConstructor}>+</button>
          <button onClick={this.restConstructor}>-</button>
        </nav>
        <p>
          <b>{this.state.contador}</b>
        </p>
      </div>
    );
  }
}

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow Functions
  sumatoria = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restando = (e) => {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    /*Esta linea de codigo crea/renderiza en el DOM*/
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <h3>Contador</h3>
        <nav>
          <button onClick={this.sumatoria}>+</button>
          <button onClick={this.restando}>-</button>
        </nav>
        <p>
          <b>{this.state.contador}</b>
        </p>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Boton hecho componente</button>;
// }

// const Boton = (props) => {
//  return <button onClick={props.myOnClick}>Boton hecho componente</button>
// }

const Boton = ({ myOnClick }) => {
  return <button onClick={myOnClick}>Boton hecho componente</button>;
};
export class MasSobreEventos extends Component {
  handleClick = (e, message) => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(message);
  };

  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        >
          saludar
        </button>

        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        /> */}

        {/*Evento Personalizado */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        />
      </div>
    );
  }
}
