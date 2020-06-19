import React from "react"
import ButtonElement from './ButtonElement.js'

class SidePanel extends React.Component {
    render(props) {
     return <div className="sidePanel">
      <ButtonElement name="login"/>
      <ButtonElement name="download"/>
     </div>
    }


  

  }

export default SidePanel