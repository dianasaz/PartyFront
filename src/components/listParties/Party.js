import React from 'react';
import './party.css';
import { Component } from 'react';
import CommonRequests from '../../requests/commonRequests';

class Party extends Component {
  constructor(props) {
    super(props);
    this.state = {
      join: null,
    }
  }

  onclick(id) {
    window.location.assign('/parties/' + id);
  }

  join(party, user) {
    if (user != null) {
      CommonRequests.checkUserToParty(party, user)
        .then(res => {
          if (res != null) {
            CommonRequests.addUserToParty(party, user);
          }
        })
    }
  }


  componentDidMount() {
    if (localStorage.getItem("user") != null) {
      document.getElementById("but_id").disabled = false;
      document.getElementById("party").disabled = false;
    }
    else {
      document.getElementById("but_id").disabled = true;
      document.getElementById("add").disabled = true;
    }

    CommonRequests.checkUserToParty(this.props.id, localStorage.getItem("user"))
    .then(res => {
      this.setState({join : res})
    })
  }

  getButton(join) {
      if (join != null) {
        return <button type="button" id="but_id" onClick={() => this.join(this.props.id, localStorage.getItem("user"))} className="btn btn-primary align-self-center" disabled>You joined</button>
      }
      else return <button type="button" id="but_id" onClick={() => this.join(this.props.id, localStorage.getItem("user"))} className="btn btn-primary align-self-center">Join</button>
  }

  render() {
    if (this.state.join != null) {
      var join = this.state.join;
    }
    return (
      <div className="party" id="party">
        <a onClick={() => this.onclick(this.props.id)}>
          <div>
            <h2>Party: {this.props.name}</h2>
            <hr />
            <div className="row">
              <div className="col-6">
                <p> Address: {this.props.address}</p>
                <p> Date : {new Date(this.props.date).toLocaleDateString()}</p>
              </div>
              <div className="col-6 d-flex justify-content-end">
                {this.getButton(join)}
              </div>
            </div>

          </div>
        </a>
      </div >

    );
  }
}

export default Party;
