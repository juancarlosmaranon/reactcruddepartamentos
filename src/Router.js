import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Departamentos from './components/Departamentos'
import MenuDepartamentos from './components/MenuDepartamentos'
import CrearDepartamentos from './components/CrearDepartamentos'
import DetallesDepartamento from './components/DetallesDepartamento'

export default class Router extends Component {

  render() {
    function DetallesDepartamentoElement(){
        var {num,nom,loc} = useParams();
        return(
            <DetallesDepartamento iddepartamento={num}
            nombre={nom} localidad={loc}/>
        )
    }
    return (
      <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
            <Route path='/' element={<Departamentos/>}/>
            <Route path='/create' element={<CrearDepartamentos/>}/>
            <Route path='/details/:num/:nom/:loc' element={<DetallesDepartamentoElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
