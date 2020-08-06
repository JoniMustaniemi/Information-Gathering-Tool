import React from "react";
import FormElementLarge from './FormElementLarge.js';
import FormElementSmall from './FormElementSmall.js';
import ButtonElement from './ButtonElement.js';
import FormChoiceElement from './FormChoiceElement.js';
import form_background from '../pics/form_background.jpg';

class FormContainer extends React.Component {


    render(props) {
    return <div>
      <div id="formWrapper" className="formContainer animated">
        <div className="rotate">
      <img className="formBackground" src={form_background} alt="beautiful background should be here"></img>
       </div>
        <div className="formTopRow">
          <FormElementSmall identifier="fs1" title="[Title]"/>
          <FormElementSmall identifier="fs2" title="[Title]"/>
          <FormElementSmall identifier="fs3" title="[Title]"/>
        </div>
        <div className="formLeft">
          <FormElementLarge identifier="fl1" title="Placeholder title 1"/>
          <div className="divider"></div>
          <FormElementLarge identifier="fl2" title="Placeholder title 2"/>
        </div>
        <div className="formCenter">
          <FormElementLarge identifier="fl3" title="Placeholder title 3"/>
          <div className="divider"></div>
          <FormElementLarge identifier="fl4" title="Placeholder title 4"/>
        </div>
        <div className="formRight">
          <div className="formRightPart1">
          <FormElementSmall identifier="fs4" title="[Title]"/>
          </div>
          <div className="formRightPart2">
          <FormElementSmall identifier="fs5" title="[Title]"/>
          </div>
          <div className="formRightBottom">
          <div className="choiceElement">
          <h3 className="choiceElementTitle">Type</h3>
            <FormChoiceElement identifier="choice1" title="Placeholder Type 1"/>
            <FormChoiceElement identifier="choice2" title="Placeholder Type 2"/>
            <FormChoiceElement identifier="choice3" title="Placeholder Type 3"/>
            <FormChoiceElement identifier="choice4" title="Placeholder Type 4"/>
            <FormChoiceElement identifier="choice5" title="Placeholder Type 5"/>
          </div>
          </div>
        </div>
        <div className="formBottomRow display-none">
          <ButtonElement name="submit"/>
        </div>
        
      </div>
      
      </div> 
    }
    handleClickEvent() {
      
    }

  }

export default FormContainer;
