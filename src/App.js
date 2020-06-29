import React, { Component } from "react"
import "./App.css"
import SidePanel from './components/SidePanel.js'
import TopPanel from './components/TopPanel.js'
import FormContainer from './components/FormContainer.js'


class App extends Component {
  render() {
    return (
    <div>
      <SidePanel/>
      <TopPanel title="Form title"/>
      <FormContainer/>
    </div>
     
    )
  }
}

export default App
