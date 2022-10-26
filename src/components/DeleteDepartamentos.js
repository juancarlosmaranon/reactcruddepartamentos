import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class DeleteDepartamentos extends Component {

    state = {
        status: false
    }

    deleteDepartamento = (e) => {
        e.preventDefault();
        //CAMBIAR EL STATE
        var numero = this.props.id;
        console.log(numero);
        var request = "api/Departamentos/"+numero;
        var url = Global.urlDepartamentos +request;
        axios.delete(url).then(response=>{
            this.setState({
                status : true
            })
        })
    }

    render() {
        //TENEMOS QUE DIBUJAR AQUI EL <h2>
        //UN IF CON EL STATE
        if(this.state.status == true){
            return(<Navigate to="/"/>)
        }

        return (
            <div>
                <h1>
                    Delete Departamentos:
                    <span style={{ color: "red" }}>
                        {this.props.id}{console.log(this.props.id)}
                    </span>

                </h1>
                <form onSubmit={this.deleteDepartamento}>
                    <button className='btn btn-danger'>
                        Eliminar departamento
                    </button>
                </form>
            </div>
        )
    }
}
