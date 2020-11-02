import React from "react";


var formValues = [];
var localModification = window.localStorage;

class FormModifier extends React.Component {
    render(props) {
    let inputID = this.props.type+"Input"+ this.props.formReference;
    let buttonID = this.props.type+"Button"+ this.props.formReference;
    return <div className={this.props.type +" modifyChangerWrapper"}>
      <input maxLength='32' id={inputID} type={this.props.type} className={this.props.type+"type animated"}></input>
      <button id={buttonID} onClick={() => this.handleClickEvent(inputID, buttonID)}>set {this.props.type}</button>
      </div>
    }

    handleClickEvent(inputID, buttonID) {
      let title = "title";
      let color = "color";
      if(buttonID.includes(title)) {
        let inputField = document.getElementById(inputID);
        this.changeFormTitle(this.props.formReference, inputField.value, inputField)
      } else if (buttonID.includes(color)) {
        let inputField = document.getElementById(this.props.formReference+"TextArea");
        let colorElement = document.getElementById(inputID);
        this.setBackgroundColor(inputField,colorElement.value);
      }
    }

    getFormValues(formElements) {
      for (let i = 0; i < formElements.length; i++) {
        let tempObject = {};
        tempObject.id = formElements[i].children[1].id;
        tempObject.title = formElements[i].children[1].innerHTML;
        tempObject.text = formElements[i].children[2].value;
        formValues.push(tempObject);
      }
    }

    setBackgroundColor(inputArea, color) {
      inputArea.style.backgroundColor = color;
      this.saveValues();
    }

    changeFormTitle(formID, newValue, inputfield) {
      let formTitle = document.getElementById(formID);
      formTitle.innerHTML = newValue;
      inputfield.value = "";
      this.saveValues();
    }

    saveValues() {
      formValues = [];
      let formElements = document.querySelectorAll(".formElement");
      let typeSelections = document.querySelectorAll(".radioType1");
      this.getFormValues(formElements);
      this.getTypeValues(typeSelections);
      for (let i = 0; i < formValues.length; i++) {
        let identificationString = formValues[i].id;
        if(identificationString === undefined) {
          return;
        }
        if(identificationString.includes('fs')) {
          localModification.setItem(formValues[i].id, JSON.stringify({
            id: formValues[i].id,
            title: formValues[i].title,
            text: formValues[i].text
          }));
        }
        if(identificationString.includes('fl')) {
          let backgroundColor = this.getBackgroundColor(formValues[i].id);
          localModification.setItem(formValues[i].id, JSON.stringify({
            id: formValues[i].id,
            title: formValues[i].title,
            text: formValues[i].text,
            backgroundColor: backgroundColor
          }));
        }
        if(identificationString.includes('choice')) {
          localModification.setItem(formValues[i].id, JSON.stringify({
            id: formValues[i].id,
            title: formValues[i].title,
            text: formValues[i].text,
          }));
        }
      }
    }

    getTypeValues(typeSelections) {
      for (let i = 0; i < typeSelections.length; i++) {
        let tempObject = {};
        tempObject.id = typeSelections[i].children[1].id;
        tempObject.title = "Type";
        tempObject.text =  typeSelections[i].children[1].innerHTML;
        formValues.push(tempObject);
      }
    }

    getBackgroundColor(id) {
      let element = document.getElementById(id+'TextArea');
      var style;
      if (window.getComputedStyle) {
       style = window.getComputedStyle(element);
    } else {
        style = element.currentStyle;
    }
        return style.backgroundColor;
    }
  }

export default FormModifier;