import React from "react";


class FormModifier extends React.Component {
    render(props) {
    let inputID = this.props.type+"Input"+ this.props.formReference;
    let buttonID = this.props.type+"Button"+ this.props.formReference;
    return <div className={this.props.type +" modifyChangerWrapper"}>
      <input maxLength='32' id={inputID} type={this.props.type} className={this.props.type+"type animated "}></input>
      <button id={buttonID} onClick={() => this.handleClickEvent(inputID, buttonID)}>set {this.props.type}</button>
      </div>
    }

    handleClickEvent(inputID, buttonID) {
      let title = "title";
      let color = "color";
      if(buttonID.includes(title)) {
        let inputField = document.getElementById(inputID);
        console.log(inputID);
        this.changeFormTitle(this.props.formReference, inputField.value, inputField)
      } else if (buttonID.includes(color)) {
        let inputField = document.getElementById(this.props.formReference+"TextArea");
        let colorElement = document.getElementById(inputID);
        this.setBackgroundColor(inputField,colorElement.value);
      }
    }

    setBackgroundColor(inputArea, color) {
      inputArea.style.backgroundColor = color;
    }

    changeFormTitle(formID, newValue, inputfield) {
      let formTitle = document.getElementById(formID);
      formTitle.innerHTML = newValue;
      inputfield.value = "";
    }
  }

export default FormModifier;