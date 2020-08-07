import React from "react";
import ButtonElement from './ButtonElement.js';
import ModifyMenuElement from './ModifyMenuElement.js';

class FormElementSmall extends React.Component {

    render(props) {
    return  <div className="formElementSmall animated formElement">
      <div className="formElementSmallModify modifyButton display-none">
      <ButtonElement name="modify" target={this}/>
      </div>
      <h3 id={this.props.identifier}>{this.props.title}</h3>
      <input id={this.props.identifier+"TextArea"} className="inputElementSmall" type="text"/>
      <div className="tooltip tooltipSmall display-none">
      <ModifyMenuElement formReference={this.props.identifier} identifier="title" title="change form title" />
     {/*  <ModifyMenuElement formReference={this.props.identifier} identifier="color" title="change form color" /> */}
    </div>
    </div>
    }
  }

export default FormElementSmall;