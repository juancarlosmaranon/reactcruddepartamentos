import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Departamentos from './components/Departamentos'
import MenuDepartamentos from './components/MenuDepartamentos'
import CrearDepartamentos from './components/CrearDepartamentos'
import DetallesDepartamento from './components/DetallesDepartamento'
import DeleteDepartamentos from './components/DeleteDepartamentos'
import UpdateDepartamento from './components/UpdateDepartamento'
import MostrarDepartamentos from './components/MostrarDepartamentos'

export default class Router extends Component {

  render() {
    function DetallesDepartamentoElement(){
        var {num,nom,loc} = useParams();
        return(
            <DetallesDepartamento iddepartamento={num}
            nombre={nom} localidad={loc}/>
        )
    }

    function DeleteDepartamentosElement(){
        var {id} = useParams();
        return(
            <DeleteDepartamentos id={id}/>
        )
    }

    function UpdateDepartamentoElement(){
        var {iddepartamento} = useParams();
        return(
            <UpdateDepartamento id={iddepartamento}/>
        )
    }

    function MostrarDepartamentosElement(){
        var {idmostrar} = useParams();
        return(
          <MostrarDepartamentos idmostrar={idmostrar}/>
        )
    }
    return (
      <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
            <Route path='/' element={<Departamentos/>}/>
            <Route path='/create' element={<CrearDepartamentos/>}/>
            <Route path='/details/:num/:nom/:loc' element={<DetallesDepartamentoElement/>}/>
            <Route path='/delete/:id' element={<DeleteDepartamentosElement/>}/>
            <Route path='/update/:iddepartamento' element={<UpdateDepartamentoElement/>}/>
            <Route path='/mostrar/:idmostrar' element={<MostrarDepartamentosElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
