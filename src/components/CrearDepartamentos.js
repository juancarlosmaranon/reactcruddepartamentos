import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CrearDepartamentos extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    insertDepartamento = (e) => {
        e.preventDefault();
        var request = "api/Departamentos";
        var url = Global.urlDepartamentos + request;
        var numero = parseInt(this.cajaNumeroRef.current.value);
        var nombre = this.cajaNombreRef.current.value;
        var localidad = this.cajaLocalidadRef.current.value;
        //REACT YA PERMIE DECLARAR OBJETOS CON FORMATOS JSON
        //DECLARAAMOS UN AVARIABLE CON LA PROPIEDADES DEL API DE JSON
        var departamento = {
            numero:numero,
            nombre:nombre,
            localidad:localidad
        };
        //EN AXIOS EL METODO POST RECIBE DOS PARAMETROS 
        //1) URL
        //2) OBJETO JSON PARA LA API
        axios.post(url,departamento).then(response=>{
            this.setState({
                status : true,
                mensaje : "Departamento insertado!!!"
            })
        });
    }

    render() {

        if(this.state.status == true){
            return(
                <Navigate to="/"/>
            );
        }

        return (
            <div>
                <h1>Create Departamentos</h1>
                <form>
                    <label>Numero: </label>
                    <input type="number" className='form-control'
                    ref={this.cajaNumeroRef} required/><br/>

                    <label>Nombre: </label>
                    <input type="text" className='form-control'
                    ref={this.cajaNombreRef} required/><br/>

                    <label>Localidad: </label>
                    <input type="text" className='form-control'
                    ref={this.cajaLocalidadRef} required/><br/>

                    <button className='btn btn-info' onClick={this.insertDepartamento}>
                        Insertar departamento
                    </button>
                </form>
                <h2 style={{color:"blue"}}>
                    {this.state.mensaje}
                </h2>
            </div>
        )
    }
}
