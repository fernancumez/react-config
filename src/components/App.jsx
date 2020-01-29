
//TODO: Componente principal

import React, { Component } from 'react'; //?Impoortando modúlos

class App extends Component { //!Creacion de nuestro componente

  constructor(props) {
    super(props);

    this.state = {  //?Estado de nuestra aplicacion
      message: "Configuración ReactJS"
    }
  }

  render() {
    return (
      <div className="container contenedor">
        <h3 className="header mt-5"><b>{this.state.message}</b></h3>
        <hr />
        <div className="main mt-5">
          <h4 className=""><i>
            Esta es una plantilla de reactJS con las configuraciones de Webpack, Babel y Bootstrap.<br />
            Muy útil si se desea realizar un proyecto desde cero.
            </i></h4>
        </div>
      </div>
    );
  }
}

export default App; //!Exportando nuestro componente