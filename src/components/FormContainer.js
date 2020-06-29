import React from "react";
import FormElementLarge from './FormElementLarge.js';
import FormElementSmall from './FormElementSmall.js';

class FormContainer extends React.Component {


    render(props) {
    return <div>
      <div id="formWrapper" className="formContainer animated">
        
        <div className="formTopRow">
          <FormElementSmall identifier="fs1" title="User"/>
          <FormElementSmall identifier="fs2" title="Block"/>
          <FormElementSmall identifier="fs3" title="Story"/>
        </div>
        <div className="formLeft">
          <FormElementLarge identifier="fl1" title="I want to be able to.."/>
          <FormElementLarge identifier="fl2" title="So that I can.."/>
        </div>
        <div className="formRight">
          <FormElementLarge identifier="fl3" title="To do that I need.."/>
          <FormElementLarge identifier="fl4" title="I know im done in target when.."/>
        </div>
        <div className="formBottomRow">
        {/*   <FormElementSmall title="Importance"/>
          <FormElementSmall title="Estimate"/> */}
         
        </div>
      </div>
    
      </div>
     
    }
  }

export default FormContainer;
