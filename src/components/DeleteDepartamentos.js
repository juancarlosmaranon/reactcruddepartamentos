import React, { Component } from 'react'

export default class DeleteDepartamentos extends Component {
  render() {
    return (
        <div>
            <h1>
                Delete Departamentos:
                <span style={{color:"red"}}>
                    {this.props.id}
                </span>
            </h1>
        </div>
    )
  }
}
