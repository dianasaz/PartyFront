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
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                    </div>
                    <p> OR  </p>
                    <input type="email" id="inputEmail" onChange={this.loginChange.bind(this)} className="form-control" placeholder="Login" required="" />
                    <input type="password" id="inputPassword" onChange={this.passwordChange.bind(this)} className="form-control" placeholder="Password" required="" />

                    <a className="btn btn-success" onClick={() => {
                        CommonRequests.userLogin(this.state.login, this.state.password);
                    }} type="submit">Sign in</a>
                    <a href="#" id="forgot_pswd">Forgot password?</a>
                    <p>Don't have an account!</p>
                    <button className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus"></i><a onClick={(e) => { window.location.assign('/register'); }} className="nav-link"> Sign up New Account </a></button>
                </form>

                <form action="/reset/password/" className="form-reset">
                    <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" />
                    <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                    <a href="#" id="cancel_reset"><i className="fas fa-angle-left"></i> Back</a>
                </form>

                <form action="/signup/" className="form-signup">
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                    </div>
                    <div className="social-login">
                        <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                    </div>

                    <p>OR</p>

                    <input type="text" id="user-name" className="form-control" placeholder="Full name" required=""  />
                    <input type="email" id="user-email" className="form-control" placeholder="Email address" required />
                    <input type="password" id="user-pass" className="form-control" placeholder="Password" required />
                    <input type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required />

                    <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
                    <a href="#" id="cancel_signup"><i className="fas fa-angle-left"></i> Back</a>
                </form>
            </div>
        );
    }
}

export default Login;