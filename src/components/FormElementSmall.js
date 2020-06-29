import React from "react";
import ButtonElement from './ButtonElement.js';
import ModifyMenuElement from './ModifyMenuElement.js';

class FormElementSmall extends React.Component {

    render(props) {
    return  <div className="formElementSmall animated formElement">
      <div className="formElementSmallModify modifyButton display-none">
      <ButtonElement name="modify" target={this}/>
      </div>
      <h3>{this.props.title}</h3>
      <input className="inputElementSmall" type="text"/>
      <div className="tooltip tooltipSmall display-none">
      <ModifyMenuElement title="change form title" />
      <ModifyMenuElement title="change form color" />
    </div>
    </div>
    }
  }

export default FormElementSmall;