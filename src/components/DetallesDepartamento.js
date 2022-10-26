import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class DetallesDepartamento extends Component {
  render() {
    return (
        <div>
            <h1 style={{color:"grey"}}>
                Detalles Departamento: {this.props.iddepartamento}
            </h1>
            <h2 style={{color:"blue"}}>
                Nombre: {this.props.nombre}
            </h2>
            <h2 style={{color:"red"}}>
                localidad: {this.props.localidad}
            </h2>
        </div>
    )
  }
}
