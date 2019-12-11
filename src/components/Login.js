import React from 'react';
import './Login.css';

function Login() {
  return (
    <div id="logreg-forms">
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal"> Sign in</h1>
            <div className="social-login">
                <button className="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                <button className="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
            </div>
            <p> OR  </p>
            <input type="email" id="inputEmail" class="form-control" placeholder="Login" required="" autofocus=""/>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
            
            <button className="btn btn-success btn-block" type="submit"><i className="fas fa-sign-in-alt"></i> Sign in</button>
            <a href="#" id="forgot_pswd">Forgot password?</a>
            <p>Don't have an account!</p>
            <button className="btn btn-primary btn-block" type="button" id="btn-signup"><i className="fas fa-user-plus"></i><a onClick={(e) => { window.location.assign('http://localhost:3000/register');}} className="nav-link"> Sign up New Account </a></button>
            </form>

            <form action="/reset/password/" className="form-reset">
                <input type="email" id="resetEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
                <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                <a href="#" id="cancel_reset"><i className="fas fa-angle-left"></i> Back</a>
            </form>
            
            <form action="/signup/" class="form-signup">
                <div className="social-login">
                    <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                </div>
                <div className="social-login">
                    <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                </div>
                
                <p>OR</p>

                <input type="text" id="user-name" className="form-control" placeholder="Full name" required="" autofocus=""/>
                <input type="email" id="user-email" className="form-control" placeholder="Email address" required autofocus=""/>
                <input type="password" id="user-pass" className="form-control" placeholder="Password" required autofocus=""/>
                <input type="password" id="user-repeatpass" className="form-control" placeholder="Repeat Password" required autofocus=""/>

                <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
                <a href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</a>
            </form>        
        </div>
  );
}

export default Login;