import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';

export default class Departamentos extends Component {

    state = {
        departamentos: [],
        status: false
    }

    loadDepartamentos=()=>{
        var request = "api/Departamentos";
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(response =>{
            this.setState({
                departamentos:response.data,
                status:true
            })
        })
    }

    componentDidMount = () =>{
        this.loadDepartamentos();
    }

    render() {
        //ESTO ES JAVASCRIPT
        if (this.state.status == false) {
            //LOADING
            return (
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )

        } else {
            //PINTAMOS NUESTRO DIBUJO
            return (
                <div>
                    <h1>Departamentos</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Numeros</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th>Insertar</th>
                                <th>Borrar</th>
                                <th>Modificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento,index)=>{
                                    return(
                                        <tr key={departamento.numero} >
                                            <td>{departamento.numero}</td>
                                            <td>{departamento.nombre}</td>
                                            <td>{departamento.localidad}</td>
                                            <td>
                                                <NavLink to={"/details/"+departamento.numero+"/"
                                                +departamento.nombre+"/"+departamento.localidad} 
                                                className="btn btn-success">Details</NavLink>
                                            </td>
                                            <td>
                                                <NavLink to={"/delete/"+departamento.numero} 
                                                className="btn btn-danger">Borrar</NavLink>
                                            </td>
                                            <td>
                                                <NavLink to={"/update/"+departamento.numero} 
                                                className="btn btn-info">Modificar</NavLink>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
