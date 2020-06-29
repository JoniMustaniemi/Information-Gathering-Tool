import React from "react";
import ButtonElement from './ButtonElement.js';
import ModifyMenuElement from './ModifyMenuElement.js';

class FormElementLarge extends React.Component {

  
    render(props) {
    return <div className="formElementLarge animated formElement">
    <div className="formElementLargeModify modifyButton display-none">
    <ButtonElement name="modify" target={this}/>
    </div>
    <h3 id={this.props.identifier}>{this.props.title}</h3>
    <textarea id={this.props.identifier+"TextArea"} className="inputElementLarge" type="text"/>
    <div className="tooltip tooltipLarge display-none">
      <ModifyMenuElement formReference={this.props.identifier} identifier="title" title="change form title" />
      <ModifyMenuElement formReference={this.props.identifier} identifier="color" title="change form color" />
    </div>
    </div>
    }
  }

export default FormElementLarge;