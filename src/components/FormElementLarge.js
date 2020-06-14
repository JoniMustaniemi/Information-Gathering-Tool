import React from "react"

class FormElementLarge extends React.Component {
    render(props) {
    return <div className="formElementLarge animated">
    <h3>{this.props.title}</h3>
    <textarea className="inputElementLarge" type="text"/>
    </div>
    }
  }

export default FormElementLarge