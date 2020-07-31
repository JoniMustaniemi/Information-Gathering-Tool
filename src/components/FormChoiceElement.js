import React from "react";
import ModifyMenuElement from './ModifyMenuElement.js';
import ButtonElement from './ButtonElement.js';

class FormChoiceElement extends React.Component {

    render(props) {
    return <div>
      <div className="radioType1">
      <input type="radio" id={this.props.identifier} name="typechoice" value={this.props.title}/>
    <label htmlFor="choice1"> {this.props.title}</label><br/>
    <div className="formElementChoiceModify modifyButton display-none">
          <ButtonElement name="modify" target={this}/>
          </div>
          <div className="tooltip tooltipChoice display-none">
          <ModifyMenuElement formReference={this.props.identifier} identifier="title" title="change Type title" />
          </div> 
      </div>
    </div>
    
    }
  }

export default FormChoiceElement;