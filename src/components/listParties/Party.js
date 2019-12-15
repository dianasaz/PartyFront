import React from 'react';
import './party.css';
import { Component } from 'react';
import CommonRequests from '../../requests/commonRequests'

class Party extends Component {
  constructor(props) {
    super(props);
  }

  onclick(id) {
    window.location.assign('/parties/' + id);
  }

  render() {
    return (
        <div className="party" id="party">
          <a onClick={() => this.onclick(this.props.id)}>
          <div>
            <h2>Party: {this.props.name}</h2>
            <div className="row">
              <div className="col-6">
                <p> Address: {this.props.address}</p>
                <p> Date : {this.props.date}</p>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <button type="button" className="btn btn-primary align-self-center">Join</button>
              </div>
            </div>
            <div className="progress" >
              <div className="bar" style={{ width: '40%', background: 'grey' }}></div>
            </div>
          </div>
          </a>
        </div>
   
        );
      }
    }  
    
export default Party;
