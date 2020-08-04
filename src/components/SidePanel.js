import React from "react";
import ButtonElement from './ButtonElement.js';
import LoginMenu from './LoginMenu.js';

class SidePanel extends React.Component {
    render(props) {
     return <div id="sidepanel" className="sidePanel">
        <div className="updateCycle orange"></div>
       <div id="logoutButtonWrapper" className="display-none">
        <ButtonElement name="logout"/>
       </div>
         <ButtonElement name="login"/>
         <ButtonElement name="display"/>
         <ButtonElement name="download"/>
         <LoginMenu/>
     </div>
  
    }
  }

export default SidePanel;