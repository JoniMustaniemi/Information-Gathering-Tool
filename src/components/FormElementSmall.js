import React from "react"

class FormElementSmall extends React.Component {
    render(props) {
    return <div className="formElementSmall animated">
    <h3>{this.props.title}</h3>
    <input className="inputElementSmall" type="text"/>
    </div>
    }
  }

export default FormElementSmall