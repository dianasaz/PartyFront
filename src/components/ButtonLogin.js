import React from "react";
import ReactDOM from "react-dom";
import CommonRequests from '../requests/commonRequests';

class ButtonLogin extends React.Component {
  logIn() {
    window.location.assign('/login');
  }

  logOut(){
    localStorage.removeItem("user");
    this.getLog();
  }

  getLog(){
    if (localStorage.getItem('user') == null)
    return "Login"
    else return "LogOut";
  }

  onclick(){
    if (localStorage.getItem('user') == null) this.logIn();
    else  {
      this.logOut();
    }
    this.forceUpdate();
  }

  componentDidMount(){
    this.getLog();
  }

  render() {
    return (
      <a onClick={(e) => this.onclick()}>
        <button type="button" className="btn btn-outline-primary">
          {this.getLog()}
        </button>
      </a>);
  }
}
export default ButtonLogin;