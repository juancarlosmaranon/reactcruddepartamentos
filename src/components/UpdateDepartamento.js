import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom'

export default class UpdateDepartamento extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        departamento: {},
        status: false,
        status1: false
    }

    buscarDepartamento = () => {
        var id = this.props.id;
        var request = "api/Departamentos/" + id;
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
                status: true
            })
        })
    }

    updateDepartamento = (e) => {
        e.preventDefault();
        var cajaNumeroRef = parseInt(this.cajaNumeroRef.current.value);
        var cajaNombreRef = this.cajaNombreRef.current.value;
        var cajaLocalidadRef = this.cajaLocalidadRef.current.value;
        var data = {
            numero: cajaNumeroRef,
            nombre: cajaNombreRef,
            localidad: cajaLocalidadRef
        }
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        axios.put(url, data).then(response => {
            this.setState({
                status1: true
            })

        })

    }

    componentDidMount = () => {
        this.buscarDepartamento();
    }

    render() {
        if (this.state.status1 == true) {
            return (<Navigate to="/" />)
        }
        return (
            <div>
                <h1>Update Departamento</h1>
                {
                    this.state.status1 == true &&
                    (<h1 style={{ color: "blue" }}>Departamento modificado!!!</h1>)
                }
                {
                    this.state.status == true &&
                    (<form>
                        <input type="hidden" value={this.state.departamento.numero} ref={this.cajaNumeroRef} /><br />

                        <label>Nombre: </label>
                        {/* ATENTO CON EL defaultValue!!! */}
                        <input type="text" defaultValue={this.state.departamento.nombre} className='form-control'
                            ref={this.cajaNombreRef} /><br />

                        <label>Localidad: </label>
                        <input type="text" defaultValue={this.state.departamento.localidad} className='form-control'
                            ref={this.cajaLocalidadRef} /><br />

                        <button className='btn btn-info' onClick={this.updateDepartamento}>
                            Modificar departamento
                        </button>
                    </form>)
                }
            </div>
        )
    }
}
