import React from "react"

class ButtonElement extends React.Component {
    render(props) {
     return  <div className={this.props.name + " iconContainer"}>
     <button onClick={() => this.handleClickEvent(this.props.name)}><h4>{this.props.name}</h4></button>
     </div>
    }

    handleClickEvent(name) {
        console.log(name);
    }

  }

export default ButtonElement