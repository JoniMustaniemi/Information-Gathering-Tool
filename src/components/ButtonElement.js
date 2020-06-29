import React from "react";


var modifyMenus = [];

class ButtonElement extends React.Component {
  
    render(props) {
     
      if(this.props.name) {
       var name = this.capitalize(this.props.name);
       
      }
     
     return  <div className={this.props.name + " iconContainer"}>
     <button id={this.props.name} onClick={(e) => this.handleClickEvent(e.target)}><h4>{name}</h4></button>
     </div>
    }

    handleClickEvent(element) {
    if(element.id === "modify") {
      let object = element.parentNode.parentNode.parentNode;
      this.getObjectValues(object);
    } if(element.id === "login") {
      this.emptyfields("login");
      this.toggleLoginMenu();
    }
    if(element.id === "logout") {
      this.logOut();
    }
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

    getObjectValues(object) {
      let children = object.children;
      var formInfoObject = {
        title: "",
        text: "",
      }
      this.getTitleValue(children, formInfoObject);
      this.getTextValue(children,formInfoObject);
      //console.log(formInfoObject);
      this.toggleModification(children);
    }

    toggleModification(children) {
      let tooltipLargeHidden = "tooltip tooltipLarge display-none";
      let tooltiplargeVisible = "tooltip tooltipLarge active";
      let tooltipSmallHidden = "tooltip tooltipSmall display-none"
      let tooltipSmallVisible = "tooltip tooltipSmall active";

      for (let i = 0; i < children.length; i++) {
       if(children[i].className === tooltipLargeHidden || children[i].className === tooltipSmallHidden) {
        this.checkForActiveMenus(children[i]); 
        children[i].classList.remove("display-none");
        children[i].classList.add("active");
       
       } else if(children[i].className === tooltiplargeVisible|| children[i].className === tooltipSmallVisible) {
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

    getTitleValue(children, formInfoObject) {
      for (let i = 0; i < children.length; i++) {
        if(children[i].tagName === "H3") {
          formInfoObject.title = children[i].innerHTML;
        }
      }
      return formInfoObject;
    }

    getTextValue(children, formInfoObject) {
      for (let i = 0; i < children.length; i++) {
        if(children[i].tagName === "TEXTAREA" || children[i].tagName === "INPUT") {
          formInfoObject.text = children[i].value;
        }
      }
      return formInfoObject;
    }

    capitalize = (string) => {
      if (typeof string !== 'string') return ''
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

 
  }

export default ButtonElement;