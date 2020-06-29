import React from "react";
import FormModifier from './FormModifier.js';

class ModifyMenuElement extends React.Component {
    render(props) {
    return <div>
<button className="modifyMenuElement">
    <p id={this.props.identifier}>{this.props.title}</p>
</button>
<div className="modifyInput tooltip">
<FormModifier type={this.props.identifier} formReference={this.props.formReference} />
</div>
</div>
    }

  }

export default ModifyMenuElement;