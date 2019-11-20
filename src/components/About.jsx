import React, { Component } from 'react';

class About extends Component {
  state = {
    message: "Configuración Básica ReactJS"  
  }

  alerta = () =>{
    alert("Una simple plantilla!");
  }

  render() { 
    return ( 
      <div className="container contenedor">
        <div className="header mt-5">
          <a onClick={this.alerta} className="btn btn-dark text-white">{this.state.message}</a> 
        </div>
        <div className="main mt-5">
          <p className="">
            Esta es una simple plantilla de reactJS la cual tiene configuraciones como
            Webpack, Babel y Bootstrap. Muy útil si se desea realizar un proyecto desde cero.
          </p>
        </div>
      </div>
    );
  }
}

export default About; 