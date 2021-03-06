import React from "react"


class LoginMenu extends React.Component {

    render(props) {
    return <div id="loginContainer" className="display-none loginWrapper">
        <h4>Username</h4>
        <input id="username"></input>
        <h4>Password</h4>
        <input id="password" type="password"></input>
        <button onClick={() => this.checkCredentials()} className="loginButton">Login</button>
    </div>
    }

    checkCredentials() {
     let element1 = document.getElementById("username");
     let element2 = document.getElementById("password");
     this.login(element1.value, element2.value);
    
    }

    login(username,password) {
      if(username === "admin" && password === "1234") {
        this.adminMode("enabled");
        this.closeLoginMenu();
        this.loggedIn();
      } else {
        alert("INVALID CREDENTIALS");
      }
    }

  loggedIn() {
    let logoutElement = document.getElementById("logoutButtonWrapper");
    let loginElement = document.getElementById("login");
    let resetButton = document.getElementById('reset');
    let sidebarIcons = document.querySelectorAll(".iconContainer");
    let switcher = document.querySelectorAll(".formatChanger");
    let linkElement = document.getElementById("linkElement");
    let styleChanger = document.getElementById("styleChanger");

    styleChanger.classList.remove("display-none");
    linkElement.classList.remove("display-none");
    logoutElement.classList.remove("display-none");
    resetButton.classList.remove("display-none");
    loginElement.classList.add("display-none");
    switcher[0].classList.remove("display-none");
    
    for (let i = 0; i < sidebarIcons.length; i++) {
      sidebarIcons[i].classList.remove("display-none");
      
    }
  }

    closeLoginMenu() {
      let element = document.getElementById("loginContainer");
      element.classList.add("display-none");
    }

    adminMode(status) {
      if(status === "enabled") {
      this.displayModifyButtons();
    } else {
      return;
    }
  }

  displayModifyButtons() {
    let modifyButtons = document.querySelectorAll(".modifyButton");
    for (let i = 0; i < modifyButtons.length; i++) {
      modifyButtons[i].classList.remove("display-none");
    }
  }
}

export default LoginMenu;