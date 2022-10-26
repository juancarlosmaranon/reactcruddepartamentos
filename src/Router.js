import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Departamentos from './components/Departamentos'
import MenuDepartamentos from './components/MenuDepartamentos'
import CrearDepartamentos from './components/CrearDepartamentos'


export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
            <Route path='/' element={<Departamentos/>}/>
            <Route path='/create' element={<CrearDepartamentos/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
