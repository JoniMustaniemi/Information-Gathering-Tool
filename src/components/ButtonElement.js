import React from "react"

class ButtonElement extends React.Component {

  constructor() {
    super();

  }

    render(props) {
     
      if(this.props.name) {
       var name = this.capitalize(this.props.name);
      }
     
     return  <div className={this.props.name + " iconContainer"}>
     <button onClick={(e) => this.handleClickEvent(e.target)}><h4>{name}</h4></button>
     </div>
    }

  

    handleClickEvent(element) {
    let object = element.parentNode.parentNode.parentNode;
    console.log(object);
    }

    

    capitalize = (string) => {
      if (typeof string !== 'string') return ''
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

 
  }

export default ButtonElement