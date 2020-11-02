import React from "react";
import ButtonElement from './ButtonElement.js';
import LoginMenu from './LoginMenu.js';
import FormatChanger from './FormatChanger.js';

class SidePanel extends React.Component {
    render(props) {
     return <div id="sidepanel" className="sidePanel">
       {/*  <div className="updateCycle orange"></div> */}
       <div id="logoutButtonWrapper" className="display-none">
        <ButtonElement name="logout"/>
       </div>
         <ButtonElement name="login"/>
         <ButtonElement name="display" defaultClass="display-none"/>
         <ButtonElement name="download" defaultClass="display-none"/>
         <FormatChanger defaultClass="display-none"/>
         <LoginMenu/>
     </div>
  
    }
  }

export default SidePanel;