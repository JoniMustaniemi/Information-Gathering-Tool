import React from "react"
import FormElementLarge from './FormElementLarge.js'
import FormElementSmall from './FormElementSmall.js'

class FormContainer extends React.Component {


    render(props) {
    return <div>
      <div id="formWrapper" className="formContainer animated">
        
        <div className="formTopRow">
          <FormElementSmall title="User"/>
          <FormElementSmall title="Block"/>
          <FormElementSmall title="Story"/>
        </div>
        <div>
          <FormElementLarge title="I want to be able to.."/>
          <FormElementLarge title="So that I can.."/>
        </div>
        <div>
          <FormElementLarge title="To do that I need.."/>
          <FormElementLarge title="I know im done in target when.."/>
        </div>
        <div className="formBottomRow">
          <FormElementSmall title="Importance"/>
          <FormElementSmall title="Estimate"/>
         
        </div>
      </div>
    
      </div>
     
    }
  }

export default FormContainer
