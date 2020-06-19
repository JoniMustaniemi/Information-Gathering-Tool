import React from "react"
import ButtonElement from './ButtonElement.js'

class FormElementSmall extends React.Component {

    render(props) {
    return  <div className="formElementSmall animated formElement">
      <div className="formElementSmallModify">
      <ButtonElement name="modify" target={this}/>
      </div>
      <h3>{this.props.title}</h3>
      <input className="inputElementSmall" type="text"/>
    </div>
    }
  }

export default FormElementSmall