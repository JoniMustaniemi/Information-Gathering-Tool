import React from "react";

class FormatChanger extends React.Component {
  
  render(props) {
   return <div className="formatChanger">
     <div className="switch" id="formatSwitcher" onClick={(e) => this.changeFormat()}><p>JSON</p></div>
   </div>
  }

  changeFormat() {
    let element = document.getElementById('formatSwitcher');
    let currentFormat = element.children[0].innerHTML;
  
  if(currentFormat === 'JSON') {
    element.children[0].innerHTML = 'XML';
    this.moveSwitcher('right', element);
  } else if(currentFormat === 'XML') {
    element.children[0].innerHTML = 'JSON';
    this.moveSwitcher('left', element);
  }
  }

  moveSwitcher(direction, element) {
  if(direction === 'right') {
   element.classList.add('moveSwitchRight');
   element.classList.remove('moveSwitchLeft');
  } else if (direction === 'left') {
    element.classList.add('moveSwitchLeft');
    element.classList.remove('moveSwitchRight');
  }
  }

} 

export default FormatChanger;