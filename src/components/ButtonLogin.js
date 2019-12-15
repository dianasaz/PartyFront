import React from "react";
import ReactDOM from "react-dom";

 class ButtonLogin extends React.Component {
    onclick () {
      window.location.assign('/login');
    }

    render() {
      return (<a onClick={(e) => this.onclick(e)}><button type="button" className="btn btn-outline-primary">Login</button>
      </a>);
    }
  }
export default ButtonLogin;