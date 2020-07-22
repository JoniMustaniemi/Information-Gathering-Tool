import React, {Component} from "react"




class FormElement extends React.Component {
    render(props) {
    return <div className="formElement animated">
    <h3>Title</h3>
    <input className="inputElement" type="text"/>
    </div>
    }
  }

export default FormElement