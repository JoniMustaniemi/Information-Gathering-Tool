import React from "react";


class FormModifier extends React.Component {
    render(props) {
    let inputID = this.props.type+"Input"+ this.props.formReference;
    let buttonID = this.props.type+"Button"+ this.props.formReference;
    return <div className={this.props.type +" modifyChangerWrapper"}>
      <input id={inputID} type={this.props.type} className={this.props.type+"type animated "}></input>
      <button id={buttonID} onClick={() => this.handleClickEvent(inputID, buttonID)} className={"modifyButton"}>set {this.props.type}</button>
      </div>
    }

    handleClickEvent(inputID, buttonID) {
      console.log(inputID);
     let inputField = document.getElementById(inputID);
     console.log(inputField.value);
    
    }

    changeFormTitle(formID, newValue, inputfield) {
      let formTitle = document.getElementById(formID);
      formTitle.innerHTML = newValue;
      inputfield.value = "";
    }
  }

export default FormModifier;