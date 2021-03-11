import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import "./App.css";
import AjaxApis from "./components/AjaxApis";

function App() {
  let name = "Tony";
  let auth = false;
  let motto = ["eat", "code", "sleep", "repeat"];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" />
          <h1>{name}</h1>
          <p>{auth ? "Usuario logeado" : "Usuario no logeado"}</p>
          <p>
            Edita <code>src/App.js</code> and save to reload.
          </p>
          <p>{2 + 1}</p>
          <ul>
            {motto.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <hr />
        <section>
          <Componente msg="Hola soy un Componente Funcional Expresado desde una prop" />
          <Propiedades
            cadena="Esto es una cadena de texto (String)"
            booleano={false}
            numero={20}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Tony", Email: "tonsvz@gmail.com" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un Elemento React </i>}
            componenteReact={<Componente msg="Soy un componente" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
        </section>
      </div>
      <div></div>
    </>
  );
}

export default App;
