import React, {Component} from "react"
import FormElement from './FormElement.js'

class FormContainer extends React.Component {
    render(props) {
    return <div className="FormContainer animated">
      <FormElement/>
      <FormElement/>
      <FormElement/>
      </div>
    }
  }

export default FormContainer