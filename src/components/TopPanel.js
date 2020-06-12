import React, {Component} from "react"

class TopPanel extends React.Component {
    render(props) {
    return <div className="topPanel">
      <div className="titleElement animated">
      {this.props.title}
      </div>
      </div>
    }
  }

export default TopPanel