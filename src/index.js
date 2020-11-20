//TODO: Archivo que arranca nuestra aplicacion

//!Importacion de modulos
import React from "react";
import ReactDOM from "react-dom";
import About from "./app";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

//?Renderizando la aplicacion
ReactDOM.render(<About />, document.getElementById("root"));
