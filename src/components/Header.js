import React from 'react';
import ButtonLogin from './ButtonLogin';

class Header extends React.Component {
    constructor(props) {
		super(props);
    } 

    componentDidMount(){
        if (localStorage.getItem("user") != null) {
            document.getElementById("profile").disabled = false;
          }
          else {
            document.getElementById("profile").disabled = true;
          }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" onClick={(e) => { window.location.assign('/parties'); }} href="#">PartyLand</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li id="profile" className="nav-item">
                            <a onClick={(e) => { window.location.assign('/profile'); }} className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={(e) => { window.location.assign('/parties'); }} href="#" className="nav-link">Parties</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                       <ButtonLogin />
                    </form>
                </div>
            </nav>

        );
    }
}

export default Header;
