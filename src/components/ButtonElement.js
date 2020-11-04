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
     
     return  <div className={this.props.name + " iconContainer " + this.props.defaultClass}>
     <button id={this.props.name} onClick={(e) => this.handleClickEvent(e.target)}><h4>{name}</h4></button>
     </div>
    }

    handleClickEvent(element) {
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
    if(element.id === "save") {
      this.saveValues();
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

    hideElementShowElement(elementToHide, elementToShow) {
      this.hideElement(elementToHide);
      this.showElement(elementToShow);
    }

    hideElement(elementToHide) {
           elementToHide.classList.add("display-none");
    }

    showElement(elementToShow) {
      elementToShow.classList.remove("display-none");
    }

    logOut() {
      let logoutElement = document.getElementById("logoutButtonWrapper");
      let loginElement = document.getElementById("login");
      let resetButton = document.getElementById("reset");
      let sidebarIcons = document.querySelectorAll(".iconContainer");
      let switcher = document.querySelectorAll(".formatChanger");
      let displayDataContainer = document.getElementById("displayDataContainer");
      let formContainer =  document.getElementById("formWrapper");
      let linkElement = document.getElementById("linkElement");
      let styleChanger = document.getElementById("styleChanger");

      this.hideElementShowElement(displayDataContainer, formContainer);
      styleChanger.classList.add("display-none");
      logoutElement.classList.add("display-none");
      loginElement.classList.remove("display-none");
      resetButton.classList.add("display-none");
      switcher[0].classList.add("display-none");
      linkElement.classList.add("display-none");
      this.hideModifyButtons();

      for (let i = 0; i < sidebarIcons.length; i++) {
        if(!sidebarIcons[i].classList.contains("login")) {
          sidebarIcons[i].classList.add("display-none");
        }
      }
    }

    hideModifyButtons() {
      let modifyButtons = document.querySelectorAll(".modifyButton");
      let modifyMenus = document.querySelectorAll(".tooltip");
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
      let loginElement = document.getElementById("loginContainer");
      if(loginElement.classList.contains("display-none")) {
        loginElement.classList.remove("display-none");
      } else {
        loginElement.classList.add("display-none");
      }
    }

    getValues() {
      formValues = [];
      let formElements = document.querySelectorAll(".formElement");
      this.getFormValues(formElements);
      this.getRadioTypeValues();
      this.saveData();
    }

    saveData() {
      let currentFormat = document.getElementById('formatSwitcher').children[0].innerHTML;
     if(currentFormat === 'JSON') {
      this.saveDataJSON(formValues);
     } else if (currentFormat === 'XML') {
       this.saveDataXML(formValues);
     }
      
    }

    saveDataJSON(data) {
      var blob = new Blob([JSON.stringify(data, null, "\t")], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "form_data.txt");
    }

    saveDataXML(data) {
      const XMLData = this.json2xml(JSON.stringify(data));
      var blob = new Blob([XMLData], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "form_data.xml");
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
        tempObject.id = formElements[i].children[1].id;
        tempObject.title = formElements[i].children[1].innerHTML;
        tempObject.text = formElements[i].children[2].value;
        formValues.push(tempObject);
      }
    }
    // TODO: fix
    getRadioTypeValues() {
      /* let tempObject = {};
      const radioTypeValue = this.getRadioTypeSelectionValues();
      const radioTypeID = this.getRadioTypeSelectionID();
      tempObject.id = radioTypeID;
      tempObject.title = "Type";
      tempObject.text = radioTypeValue;
      formValues.push(tempObject);
      alert(formValues); */
    }

    getRadioTypeSelectionID() {
      const typeSelections = document.querySelectorAll(".radioType1");
      for (let i = 0; i < typeSelections.length; i++) {
          return typeSelections[i].children[1].id;
      }
    }

    getRadioTypeSelectionValues() {
      const typeSelections = document.querySelectorAll(".radioType1");
      for (let i = 0; i < typeSelections.length; i++) {
          return typeSelections[i].children[1].innerHTML;
      }
    }

    capitalize = (string) => {
      if (typeof string !== 'string') return ''
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    json2xml(data) {
      var a = JSON.parse(data)
      var c = document.createElement("root");
      var t = function (v) {
          return {}.toString.call(v).split(' ')[1].slice(0, -1).toLowerCase();
      };
      var f = function (f, c, a, s) {
          c.setAttribute("type", t(a));
          if (t(a) !== "array" && t(a) !== "object") {
              if (t(a) !== "null") {
                  c.appendChild(document.createTextNode(a));
              }
          } else {
              for (var k in a) {
                  var v = a[k];
                  let ch;
                  if (k === "__type" && t(a) === "object") {
                      c.setAttribute("__type", v);
                  } else {
                      if (t(v) === "object") {
                          ch = c.appendChild(document.createElementNS(null, s ? "item" : k));
                          f(f, ch, v);
                      } else if (t(v) === "array") {
                           ch = c.appendChild(document.createElementNS(null, s ? "item" : k));
                          f(f, ch, v, true);
                      } else {
                          var va = document.createElementNS(null, s ? "item" : k);
                          if (t(v) !== "null") {
                              va.appendChild(document.createTextNode(v));
                          }
                          ch = c.appendChild(va);
                          ch.setAttribute("type", t(v));
                      }
                  }
              }
          }
      };
      f(f, c, a, t(a) === "array");
      return c.outerHTML;
  }

  }

export default ButtonElement;