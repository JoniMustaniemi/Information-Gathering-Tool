import React from "react";
import ModifyMenuElement from './ModifyMenuElement.js';
import ButtonElement from './ButtonElement.js';

class FormChoiceElement extends React.Component {

    render(props) {
    return <div>
      <div className="choiceElement"></div>
    <h3 className="choiceElementTitle">{this.props.title}</h3>
    <div className="formElementChoiceModify modifyButton display-none">
    <ButtonElement name="modify" target={this}/>
    </div>
     {/*  <div className="tooltip tooltipChoice display-none">
      <ModifyMenuElement formReference={this.props.identifier} identifier="title" title="change form title" />
      <ModifyMenuElement formReference={this.props.identifier} identifier="color" title="change form color" />
    </div> */}
    </div>
    }
  }

export default FormChoiceElement;