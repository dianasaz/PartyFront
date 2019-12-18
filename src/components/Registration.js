import React from 'react';
import './Login.css';
import CommonRequests from '../requests/commonRequests';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
    }

    loginChange(event) {
        this.setState({ login: event.target.value })
    }

    passwordChange(event) {
        this.setState({ password: event.target.value })
    }

    check(event) {
        const {password} = this.state;
        const confirmPassword = event.target.value;
        if (password !== confirmPassword) {
            alert("lox");
        }
    }

    render() {
        return (
            <form>
                <div id="logreg-forms">
                    <h1 className="h3 mb-3 font-weight-normal"> Sign up</h1>
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                    </div>
                    <p> OR  </p>
                    <input type="text" id="inputlogin" onChange={this.loginChange.bind(this)} value={this.state.login} className="form-control" placeholder="Login" />
                    <input type="password" id="inputPassword" onChange={this.passwordChange.bind(this)} value={this.state.password} className="form-control" placeholder="Password" />
                    {/* <input type="password" id="ConfirmPassword" className="form-control" placeholder="Confirm Password"/> */}
{/* to do confirm password onChange={this.check.bind(this)}*/}
                    <a id="submitBut" className="btn btn-success" onClick={() => {
                        CommonRequests.postAction(this.state.login, this.state.password)
                        .then (
                        CommonRequests.userLogin(this.state.login, this.state.password)
                        .then (res => {
                            if (res != null) 
                            {localStorage.setItem('user', res.id);
                            window.location.assign('/parties');
                        }
                        })
                        )
                    }} type="submit">Sign in</a>
                </div>
            </form>
        );
    }
}

export default Registration;