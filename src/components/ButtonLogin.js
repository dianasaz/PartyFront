import React from "react";
import ReactDOM from "react-dom";

 class ButtonLogin extends React.Component {
    onclick () {
      window.location.assign('http://localhost:3000/Login/');
    }

    render() {
      return (<a onClick={(e) => this.onclick(e)}><button type="button" className="btn btn-info">Login</button>
      </a>);
    }
  }
export default ButtonLogin;