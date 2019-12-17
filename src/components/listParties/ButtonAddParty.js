import React from "react";
import ReactDOM from "react-dom";

 class ButtonAddParty extends React.Component {
    onclick () {
      window.location.assign('/parties/add');
    }
    
    componentDidMount() {
      if (localStorage.getItem("user") != null) {
        document.getElementById("add").disabled = false;
      }
      else document.getElementById("add").disabled = true;
    }

    render() {
      return (<a onClick={(e) => this.onclick(e)}><button  id="add" type="button" className="btn btn-outline-primary ml-4 mt-4">Add your party</button>
      </a>);
    }
  }
export default ButtonAddParty;