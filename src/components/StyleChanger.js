import React from "react"
import ModifyMenuElement from './ModifyMenuElement.js';

class StyleChanger extends React.Component {
    render(props) {
    return <div id="styleChanger" className="styleChanger display-none">
      <div id={this.props.identifier} className="styleChangerIcon" onClick={() => this.handleClickEvent(this.props.identifier)}></div>
      <div id="backgroundColorChanger" className="display-none">
      <ModifyMenuElement formReference="formWrapper" identifier="color" title="change body color" />
      </div>
    </div>
    }

    handleClickEvent(id) {
      let element = document.getElementById(id);
      if(!element.parentNode.classList.contains("styleChangerActive")) {
        element.parentNode.classList.add("styleChangerActive");
        this.toggleColorChangerBody('active');
        element.parentNode.classList.remove("styleChangerNonActive");
      } else if(element.parentNode.classList.contains("styleChangerActive")) {
        element.parentNode.classList.remove("styleChangerActive");
        this.toggleColorChangerBody('nonActive');
        element.parentNode.classList.add("styleChangerNonActive")
      }
    }

    toggleColorChangerBody(status) {
      let element = document.getElementById('backgroundColorChanger');
      if(status === 'active') {
        
        element.classList.remove('display-none');
      } else {
        element.classList.add('display-none');
      }
    }
  }

export default StyleChanger;