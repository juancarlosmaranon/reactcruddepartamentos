import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class Departamentos extends Component {

    state = {
        departamentos: [],
        status: false
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

                </div>
            )
        }
    }
}
