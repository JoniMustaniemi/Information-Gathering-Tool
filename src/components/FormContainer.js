import React from "react";
import FormElementLarge from './FormElementLarge.js';
import FormElementSmall from './FormElementSmall.js';
import ButtonElement from './ButtonElement.js';
import FormChoiceElement from './FormChoiceElement.js';

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
          <div className="divider"></div>
          <FormElementLarge identifier="fl2" title="So that I can.."/>
        </div>
        <div className="formCenter">
          <FormElementLarge identifier="fl3" title="To do that I need.."/>
          <div className="divider"></div>
          <FormElementLarge identifier="fl4" title="I know im done in target when.."/>
        </div>
        <div className="formRight">
          <div className="formRightPart1">
          <FormElementSmall identifier="fs4" title="Importance"/>
          </div>
          <div className="formRightPart2">
          <FormElementSmall identifier="fs5" title="Estimate"/>
          </div>
          <div className="formRightBottom">
          <div className="choiceElement">
          <h3 className="choiceElementTitle">Type</h3>
            <FormChoiceElement identifier="choice1" title="Sales"/>
            <FormChoiceElement identifier="choice2" title="Product Management"/>
            <FormChoiceElement identifier="choice2" title="R&D"/>
            <FormChoiceElement identifier="choice2" title="Order Engineering"/>
            <FormChoiceElement identifier="choice2" title="Configurator Modeller"/>
          </div>
          </div>
        </div>
        <div className="formBottomRow">
          <ButtonElement name="submit"/>
        </div>
      </div>
      </div> 
    }
    handleClickEvent() {
      
    }

  }

export default FormContainer;
