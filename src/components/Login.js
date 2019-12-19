import React from 'react';
import './Login.css';
import CommonRequests from '../requests/commonRequests';

class Login extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            login: null, 
            password: null,
		}
    } 
    
    loginChange(event) {
        this.setState({ login: event.target.value })
    }

    passwordChange(event) {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div id="logreg-forms">
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal"> Sign in</h1>
                    <input type="email" id="inputEmail" onChange={this.loginChange.bind(this)} className="form-control" placeholder="Login" required="" />
                    <input type="password" id="inputPassword" onChange={this.passwordChange.bind(this)} className="form-control" placeholder="Password" required="" />

                    <a className="btn btn-success" onClick={() => {
                        CommonRequests.userLogin(this.state.login, this.state.password)
                        .then (res => {
                            if (res != null) 
                            {localStorage.setItem('user', res.id);
                            window.location.assign('/parties');
                        }
                        });
                    }} type="submit">Sign in</a>
                    <p>Don't have an account!</p>
                    <button className="btn btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus"></i><a onClick={(e) => { window.location.assign('/register'); }} className="nav-link"> Sign up New Account </a></button>
                </form>

            </div>
        );
    }
}

export default Login;