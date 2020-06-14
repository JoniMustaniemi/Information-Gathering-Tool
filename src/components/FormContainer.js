import React from "react"
import FormElementLarge from './FormElementLarge.js'
import FormElementSmall from './FormElementSmall.js'

class FormContainer extends React.Component {
    render(props) {
    return <div>
      <div className="FormContainer animated">
      <FormElementSmall title="As a"/>
        <div>
          <FormElementLarge title="I want to be able to.."/>
          <FormElementLarge title="So that I can.."/>
        </div>
        <div>
          <FormElementLarge title="To do that I need.."/>
          <FormElementLarge title="I know im done in target when.."/>
        </div>
      </div>
      </div>
    }
  }

export default FormContainer
