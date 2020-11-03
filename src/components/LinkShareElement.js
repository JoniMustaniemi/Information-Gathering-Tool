import React, {Component} from "react"

class LinkShareElement extends React.Component {
    render(props) {
    return <div id={this.props.identifier} className="linkElementContainer display-none">
      <div id="copyDiv" className="copyDiv animated copyDivToggle"><h4>Link copied</h4></div>
    <div className="linkShareElementIcon" onClick={() => this.setAsActive(this.props.identifier)}></div>
    <button id={this.props.identifier + "Button"} className="valueFieldLink" onClick={() => this.activatedButton()} >Copy Configuration</button>
    </div>
    }

    setAsActive(id) {
    let element = document.getElementById(id);
    if(element.classList.contains("linkElementContainerActive")) {
      element.classList.remove("linkElementContainerActive");
      element.classList.add("linkElementContainerNonActive");

      let copyDiv = document.getElementById("copyDiv");
      copyDiv.classList.add("copyDivNonActive");
    

    } else {
      element.classList.remove("linkElementContainerNonActive");
      element.classList.add("linkElementContainerActive");
    }
    }

    resetCopyDiv() {
        let element = document.getElementById("linkElement");
        let h4Element = element.children[0].children[0];
        h4Element.innerHTML = "Link copied";
    }

    activatedButton() {
      this.resetCopyDiv();
      let element = document.getElementById("copyDiv");
      element.classList.remove("copyDivToggle");
      this.copyValues();
      setTimeout(() => {
        element.classList.add("copyDivToggle");
      },800);
    }

    copyValues() {
         const el = document.createElement('textarea');
         let params = this.getformValues(window.localStorage);
         if(params) {
          el.value = window.location.href +
          "?fs1title=" + params.fs1.title + 
          "?"+ "fs2title=" + params.fs2.title + 
          "?" + "fs3title=" + params.fs3.title + 
          "?" + "fs4title=" + params.fs4.title + 
          "?" + "fs5title=" + params.fs5.title + 
          "?" + "fl1title=" + params.fl1.title + 
          "?" + "fl2title=" + params.fl2.title + 
          "?" + "fl3title=" + params.fl3.title + 
          "?" + "fl4title=" + params.fl4.title;
         } else {
           this.noCopy();
         }
         document.body.appendChild(el);
         el.select();
         document.execCommand('copy');
         document.body.removeChild(el);
         };

         noCopy() {
           let element = document.getElementById("linkElement");
            let h4Element = element.children[0].children[0];
            h4Element.innerHTML = "nothing to copy";
         }

         getformValues(storage) {
           let values = {
             fs1: null,
             fs2: null,
             fs3: null,
             fs4: null,
             fs5: null,
             fl1: null,
             fl2: null,
             fl3: null,
             fl4: null,
             choice1: null,
             choice2: null,
             choice3: null,
             choice4: null,
             choice5: null,
           };
           if(!storage.length) {
            return;
           } else {
            values.fs1 = JSON.parse(storage.getItem('fs1'));
            values.fs2 = JSON.parse(storage.getItem('fs2'));
            values.fs3 = JSON.parse(storage.getItem('fs3'));
            values.fs4 = JSON.parse(storage.getItem('fs4'));
            values.fs5 = JSON.parse(storage.getItem('fs5'));

            values.fl1 = JSON.parse(storage.getItem('fl1'));
            values.fl2 = JSON.parse(storage.getItem('fl2'));
            values.fl3 = JSON.parse(storage.getItem('fl3'));
            values.fl4 = JSON.parse(storage.getItem('fl4'));
           }
           return values;
         }
    }

export default LinkShareElement;