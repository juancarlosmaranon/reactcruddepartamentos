import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class MostrarDepartamentos extends Component {

    state = {
        empleados: [],
        status: false
    }

    mostrarEmpleados = () => {
        var id = this.props.idmostrar;
        var request = 'api/Empleados/EmpleadosDepartamento/' + id;
        var url = Global.urlMostrar + request;
        axios.get(url).then(response => {
            this.setState({
                empleados: response.data,
                status: true
            })
            console.log(response.data)
        })

    }

    componentDidMount = () => {
        this.mostrarEmpleados();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idmostrar != this.props.idmostrar) {
            this.mostrarEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Empleados {this.props.idmostrar}
                </h1>
                <table className='table'>
                    <thead>
                        <th>id</th>
                        <th>apellido</th>
                        <th>oficio</th>
                        <th>salario</th>
                        <th>departamento</th>
                        <th>detalles</th>
                    </thead>

                    {
                        this.state.empleados.map((empleados, index) => {
                            return (
                                <tbody key={index}>
                                    <td>{empleados.idEmpleado}</td>
                                    <td>{empleados.apellido}</td>
                                    <td>{empleados.oficio}</td>
                                    <td>{empleados.salario}</td>
                                    <td>{empleados.departamento}</td>
                                    <td><button type='button'>{empleados.detalles}</button></td>
                                </tbody>
                            )
                        })
                    }

                </table>

            </div>
        )
    }
}
