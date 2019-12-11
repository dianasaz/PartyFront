import React from 'react';
import './Login.css';
import CommonRequests from '../requests/commonRequests';

function Registration() {
  return (
    <div id="logreg-forms">
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal"> Sign up</h1>
            <div className="social-login">
                <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
            </div>
            <p> OR  </p>
            <input type="text" id="inputlogin" className="form-control" placeholder="Login"/>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password"/>
             {/* <input type="password" id="inputPassword" class="form-control" placeholder="Confirm Password" required=""/> */}

            <a className="btn btn-success" onClick={() => {    
                var el = document.getElementById("inputlogin");
                var login = el.innerText;
                const password = document.getElementById('inputPassword').innerText;
                CommonRequests.postAction(login, password, 1);}} type="submit">Sign in</a>
            </form>  
        </div>
  );
}



export default Registration;