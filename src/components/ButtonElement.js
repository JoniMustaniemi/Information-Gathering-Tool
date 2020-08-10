import React from "react";
import saveAs from "file-saver";

var modifyMenus = [];
var formValues = [];

class ButtonElement extends React.Component {
  
    render(props) {
      if(this.props.name) {
        var name = this.capitalize(this.props.name);
       if(name === "Display") {
        name+= ' data';
       }
       if(name === "Return") {
         name = null;
       }
      }
     
     return  <div className={this.props.name + " iconContainer"}>
     <button id={this.props.name} onClick={(e) => this.handleClickEvent(e.target)}><h4>{name}</h4></button>
     </div>
    }

    handleClickEvent(element) {
      console.log(element.id);
      let formWrapper = element.parentNode.parentNode.parentNode;
    if(element.id === "modify") {
      this.toggleModification(formWrapper.children);
    
    } if(element.id === "login") {
      this.emptyfields("login");
      this.toggleLoginMenu();
    }
    if(element.id === "logout") {
      this.logOut();
    }
    if(element.id === "submit") {
      // this.getValues();
      this.initializeLocalStorage();
    }
  if(element.id === "download") {
    this.getValues();
  }
    if(element.id === "display") {
     let formContainer =  document.getElementById("formWrapper");
     let displayDataContainer = document.getElementById("displayDataContainer");
     this.hideElementShowElement(formContainer, displayDataContainer);
    }
    if(element.id === "return") {
      let formContainer =  document.getElementById("formWrapper");
      let displayDataContainer = document.getElementById("displayDataContainer");
      this.hideElementShowElement(displayDataContainer,formContainer);
    }
    }

    initializeLocalStorage() {
     const  myStorage = window.localStorage;
     myStorage.testKey = "testValue";
     
    }

    hideElementShowElement(elementToHide, elementToShow) {
      this.hideElement(elementToHide);
      this.showElement(elementToShow);
    }

    hideElement(elementToHide) {
      elementToHide.classList.add("opacity-0");
      setTimeout(function () {
           elementToHide.classList.add("display-none");
    }, 1200);
    }

    showElement(elementToShow) {
      elementToShow.classList.remove("display-none");
      setTimeout(function () {
           elementToShow.classList.remove("opacity-0");
    }, 500);
    }

    logOut() {
      let logoutElement = document.getElementById("logoutButtonWrapper");
      let loginElement = document.getElementById("login");
      logoutElement.classList.add("display-none");
      loginElement.classList.remove("display-none");
      this.hideModifyButtons();
    }

    hideModifyButtons() {
      let modifyButtons = document.querySelectorAll(".modifyButton");
      let modifyMenus = document.querySelectorAll(".tooltip");
      console.log(modifyMenus);
      for (let i = 0; i < modifyButtons.length; i++) {
        modifyButtons[i].classList.add("display-none");
      }
      for (let i = 0; i < modifyMenus.length; i++) {
      if(modifyMenus[i].classList.contains("active")) {
        modifyMenus[i].classList.remove("active");
        modifyMenus[i].classList.add("display-none");
      }
      }
    }

    emptyfields(field) {
      if(field === "login") {
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        username.value = "";
        password.value = "";
      }
    }


    toggleLoginMenu() {
      let element = document.getElementById("loginContainer");
      if(element.classList.contains("display-none")) {
        element.classList.remove("display-none");
      } else {
        element.classList.add("display-none");
      }
    }

    getValues() {
      formValues = [];
      let formElements = document.querySelectorAll(".formElement");
      this.getFormValues(formElements);
      this.saveData(JSON.stringify(formValues, null, "\t"));
    }

    saveData(data) {
      var blob = new Blob([data], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "form_data.txt");
    }

    toggleModification(children) {
      let tooltipLargeHidden = "tooltip tooltipLarge display-none";
      let tooltiplargeVisible = "tooltip tooltipLarge active";

      let tooltipSmallHidden = "tooltip tooltipSmall display-none"
      let tooltipSmallVisible = "tooltip tooltipSmall active";

      let tooltipChoiceVisible = "tooltip tooltipChoice active";
      let tooltipChoiceHidden = "tooltip tooltipChoice display-none";

      for (let i = 0; i < children.length; i++) {
       if(children[i].className === tooltipLargeHidden || children[i].className === tooltipSmallHidden || children[i].className === tooltipChoiceHidden) {
        this.checkForActiveMenus(children[i]); 
        children[i].classList.remove("display-none");
        children[i].classList.add("active");
       
       } else if(children[i].className === tooltiplargeVisible|| children[i].className === tooltipSmallVisible || children[i].className === tooltipChoiceVisible) {
         children[i].classList.add("display-none");
         children[i].classList.remove("active");
       }
      }
    }

    checkForActiveMenus(currentMenu) {
    if(modifyMenus.length < 1) {
      modifyMenus.push(currentMenu);
    } else {
      let previousMenu = modifyMenus[0];
      this.hideToolTip(previousMenu,currentMenu)
    }
    }

    hideToolTip(previousMenu, currentMenu) {
      previousMenu.classList.add("display-none");
      previousMenu.classList.remove("active");
      modifyMenus = [];
      modifyMenus.push(currentMenu);
    }

    getFormValues(formElements) {
      for (let i = 0; i < formElements.length; i++) {
        let tempObject = {};
        // tempObject.id = formElements[i].children[1].id;
        tempObject.title = formElements[i].children[1].innerHTML;
        tempObject.text = formElements[i].children[2].value;
        formValues.push(tempObject);
    }
    let tempObject = {};
    const selectedType = this.getTypeSelectionValues();
    tempObject.title = "Type";
    tempObject.type = selectedType;
    formValues.push(tempObject);
    }

    getTypeSelectionValues() {
      const typeSelections = document.querySelectorAll(".radioType1");
      for (let i = 0; i < typeSelections.length; i++) {
        if(typeSelections[i].children[0].checked === true) {
          return typeSelections[i].children[1].innerHTML;
        }
        
      }
     
    }
    capitalize = (string) => {
      if (typeof string !== 'string') return ''
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

 
  }

export default ButtonElement;