import React from "react";
import LinkShareElement from './LinkShareElement.js';
import FormElementLarge from './FormElementLarge.js';
import FormElementSmall from './FormElementSmall.js';
import ButtonElement from './ButtonElement.js';
import FormChoiceElement from './FormChoiceElement.js';
import LoginMenu from './LoginMenu.js';
import StyleChanger from './StyleChanger.js';

class FormContainer extends React.Component {

  componentDidMount() {
    if(window.localStorage.length) {
      this.setLocalStorageValues(window.localStorage);
    } else {
      return;
    }
  }

    render(props) {
    return <div>
      <div id="formWrapper" className="formContainer animated">
        <LinkShareElement identifier="linkElement"/>
        <StyleChanger identifier="styleElement"/>
      <div className="formTopRow animated">
            <div className="topFs1">
            <FormElementSmall identifier="fs1" title="[Title]"/>
            </div>
            <div  className="topFs2">
            <FormElementSmall identifier="fs2" title="[Title]"/>
            </div>
            <div  className="topFs3">
            <FormElementSmall identifier="fs3" title="[Title]"/>
            </div>
          </div>
        <div className="dark">
         
     {/*  <img className="formBackground" src={form_background} alt="beautiful background should be here"></img> */}
      </div>
        <div className="formLeft">
          <FormElementLarge identifier="fl1" title="Placeholder title 1"/>
          <div className="divider"></div>
          <FormElementLarge identifier="fl2" title="Placeholder title 2"/>
        </div>
        <div className="formCenter">
          <FormElementLarge identifier="fl3" title="Placeholder title 3"/>
          <div className="divider"></div>
          <FormElementLarge identifier="fl4" title="Placeholder title 4"/>
          <button className="resetToDefaultButton animated display-none" id="reset" onClick={() => this.resetLocalStorage()}> Reset changes to default</button>
        </div>
        <div className="formRight">
        
          <div className="formRightPart1">
          <FormElementSmall identifier="fs4" title="[Title]"/>
          </div>
          <div className="formRightPart2">
          <FormElementSmall identifier="fs5" title="[Title]"/>
          </div>
          <div className="formRightBottom">
          <div className="choiceElement">
          <h3 className="choiceElementTitle">Type</h3>
            <FormChoiceElement identifier="choice1" title="Placeholder Type 1"/>
            <FormChoiceElement identifier="choice2" title="Placeholder Type 2"/>
            <FormChoiceElement identifier="choice3" title="Placeholder Type 3"/>
            <FormChoiceElement identifier="choice4" title="Placeholder Type 4"/>
            <FormChoiceElement identifier="choice5" title="Placeholder Type 5"/>
          </div>
          </div>
        </div>
      </div>
      <div id="displayDataContainer" className="displayDataForm animated display-none">
          <ButtonElement name="return"/>
          <h1>Nothing here yet</h1>
      </div>
     
      </div> 
    }

    setLocalStorageValues(storage) {
     this.setFormValues(storage);
     this.setTypeSelectionValues(storage);
    }

    setFormValues(storage) {
      for (let i = 0; i < storage.length; i++) {
        let key = localStorage.key(i);
        // get storage values
        let parsedValues = JSON.parse(storage[key]);
        let identificationString = parsedValues.id;
        if(!identificationString.includes("choice")) {
          let element = document.getElementById(parsedValues.id).parentElement;
          // get title element
          let title = element.children[1];
          let textArea = element.children[2];
          // set title element
          title.innerHTML = parsedValues.title;
          textArea.style.backgroundColor = parsedValues.backgroundColor;
        } 
      }
    }

    setTypeSelectionValues(storage) {
      for (let i = 0; i < storage.length; i++) {
        let key = localStorage.key(i);
        if(key.includes("choice")) {
          let parsedValues = JSON.parse(storage[key]);
          // get title element
          let text = document.getElementById(parsedValues.id);
          // set title element
          text.innerHTML = parsedValues.text;
        }
      }
    }

   async resetLocalStorage() {
    let loginHandler = new LoginMenu();
      window.localStorage.clear();
      window.location.reload();
      loginHandler.adminMode = 1;
    }
  }

export default FormContainer;
