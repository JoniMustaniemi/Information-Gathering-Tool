import React from "react"
import ButtonElement from './ButtonElement.js'

class FormElementLarge extends React.Component {

  
    render(props) {
    return <div className="formElementLarge animated formElement">
    <div className="formElementLargeModify">
    <ButtonElement name="modify" target={this}/>
    </div>
    <h3>{this.props.title}</h3>
    <textarea className="inputElementLarge" type="text"/>
    </div>
    }
  }

export default FormElementLarge